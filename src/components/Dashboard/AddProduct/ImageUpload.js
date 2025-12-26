import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../utils/firebaseConfig";
import { Box, Button, Grid, Typography, Paper, IconButton, LinearProgress } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export default function Upload({uploadedMedia, setUploadedMedia, color, values, backgroundC}) {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleUpload = async () => {
        if (files.length === 0 || !values.productCode) return;

        setUploading(true);
        setUploadProgress(0);

        const uploadPromises = files.map(async (file, index) => {
            const storageRef = ref(storage, `media/${values.productCode}/${file.name}`);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            setUploadProgress(((index + 1) / files.length) * 100);
            return { type: file.type.startsWith('image') ? 'image' : 'video', mediaLink: url, color, metal: color };
        });

        try {
            const newUploadedMedia = await Promise.all(uploadPromises);
            setUploadedMedia([...uploadedMedia, ...newUploadedMedia]);
            setFiles([]);
            console.log("Files Uploaded Successfully");
        } catch (error) {
            console.error('Error uploading the files', error);
        } finally {
            setUploading(false);
            setUploadProgress(0);
        }
    };

    const handleDelete = (index) => {
        const newMedia = uploadedMedia.filter((_, i) => i !== index);
        setUploadedMedia(newMedia);
    };

    return (
        <Box>
            {/* Upload Controls */}
            <Box sx={{ mb: 2 }}>
                <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        width: '100%',
                        mb: 1,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 500,
                        borderStyle: 'dashed',
                        borderWidth: 2,
                        '&:hover': {
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            backgroundColor: 'rgba(102, 126, 234, 0.04)',
                        },
                    }}
                >
                    Select Files
                    <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*, video/*"
                        style={{
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(50%)',
                            height: 1,
                            overflow: 'hidden',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            whiteSpace: 'nowrap',
                            width: 1,
                        }}
                    />
                </Button>
                {files.length > 0 && (
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {files.length} file(s) selected
                        </Typography>
                        {uploading && (
                            <LinearProgress 
                                variant="determinate" 
                                value={uploadProgress} 
                                sx={{ height: 6, borderRadius: 3 }}
                            />
                        )}
                    </Box>
                )}
                <Button
                    variant="contained"
                    onClick={handleUpload}
                    disabled={uploading || files.length === 0 || !values.productCode}
                    fullWidth
                    sx={{
                        backgroundColor: '#667eea',
                        '&:hover': { backgroundColor: '#5568d3' },
                        textTransform: 'none',
                        fontWeight: 500,
                        py: 1.5,
                    }}
                >
                    {uploading ? 'Uploading...' : 'Upload Files'}
                </Button>
                {!values.productCode && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
                        Please enter a product code first
                    </Typography>
                )}
            </Box>

            {/* Uploaded Media Grid */}
            {uploadedMedia.length > 0 && (
                <Box>
                    <Typography variant="body2" sx={{ mb: 2, fontWeight: 500, color: '#666' }}>
                        {uploadedMedia.length} file(s) uploaded
                    </Typography>
                    <Grid container spacing={2}>
                        {uploadedMedia.map((media, index) => (
                            <Grid item xs={6} sm={4} key={index}>
                                <Paper
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '100%',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        border: '1px solid rgba(0,0,0,0.08)',
                                        backgroundColor: '#f5f5f5',
                                        '&:hover .delete-button': {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        {media.type === 'image' ? (
                                            <>
                                                <img
                                                    src={media.mediaLink}
                                                    alt={`Uploaded ${index + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 8,
                                                        left: 8,
                                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                                        borderRadius: 1,
                                                        p: 0.5,
                                                    }}
                                                >
                                                    <ImageIcon sx={{ color: '#fff', fontSize: 16 }} />
                                                </Box>
                                            </>
                                        ) : (
                                            <>
                                                <video
                                                    src={media.mediaLink}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 8,
                                                        left: 8,
                                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                                        borderRadius: 1,
                                                        p: 0.5,
                                                    }}
                                                >
                                                    <VideoLibraryIcon sx={{ color: '#fff', fontSize: 16 }} />
                                                </Box>
                                            </>
                                        )}
                                        <IconButton
                                            className="delete-button"
                                            onClick={() => handleDelete(index)}
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                backgroundColor: 'rgba(211, 47, 47, 0.9)',
                                                color: '#fff',
                                                opacity: 0,
                                                transition: 'opacity 0.2s',
                                                '&:hover': {
                                                    backgroundColor: '#d32f2f',
                                                },
                                                width: 32,
                                                height: 32,
                                            }}
                                            size="small"
                                        >
                                            <DeleteIcon sx={{ fontSize: 18 }} />
                                        </IconButton>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
}
