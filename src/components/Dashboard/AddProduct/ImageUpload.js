import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../utils/firebaseConfig";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';

export default function Upload({uploadedMedia, setUploadedMedia,color,values,backgroundC}) {
    const [files, setFiles] = useState([]); // State to store the selected files
    const [uploading, setUploading] = useState(false); // State to indicate the upload status
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files); // Convert FileList to array
        setFiles(selectedFiles); // Set the selected files
    };

    const handleUpload = async () => {
        if (files.length === 0) return; // Return if no file is selected

        setUploading(true); // Set uploading state to true

        const uploadPromises = files.map(async (file) => {
            const storageRef = ref(storage, `media/${values.productCode}/${file.name}`); // Create a reference to the file in Firebase Storage
            await uploadBytes(storageRef, file); // Upload the file to Firebase Storage
            const url = await getDownloadURL(storageRef); // Get the download URL of the uploaded file
            return { type: file.type.startsWith('image') ? 'image' : 'video', mediaLink:url ,color,metal:color}; // Return object with type and URL
        });

        try {
            const uploadedMedia = await Promise.all(uploadPromises); // Wait for all uploads to finish
            setUploadedMedia(uploadedMedia); // Set the uploaded media objects
            console.log("Files Uploaded Successfully");
        } catch (error) {
            console.error('Error uploading the files', error);
        } finally {
            setUploading(false); // Set uploading state to false
        }
    };

    return (
        <Box sx={{ background: backgroundC, p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1,width:'100%' }}>
                <Button variant="outlined">
                    <input type="file" onChange={handleFileChange} multiple accept="image/*, video/*" /> {/* Allow multiple file selection and accept images and videos */}
                </Button>
                <Button variant="contained" onClick={handleUpload} disabled={uploading || files.length === 0}>
                   <Typography variant="caption">{uploading ? "Uploading..." : "Upload"}</Typography>
                </Button>
            </Box>
            {uploadedMedia.length > 0 && (
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {uploadedMedia.map((media, index) => (
                        <Grid item xs={6} key={index}>
                            {media.type === 'image' ? (
                                <Image
                                    src={media.mediaLink}
                                    alt={`Uploaded image ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className={styles.previewImage}
                                />
                            ) : (
                                <video
                                    src={media.mediaLink}
                                    controls
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
}
