"use client";
import { useState } from 'react';
import React from 'react'
import supabase from '@/supabaseConfig';
import { toast } from 'sonner';


function page() {
    const [file, setFile] = useState(null);
    const [uploading, setUploading]= useState(false);
    const [fileUrl, setFileUrl] = useState("");

    const handleFileChange = event => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            setUploading(true); 
            if(!file) {
                toast("Please upload")
                return;
            }

            const fileExt = file.name.split(".").pop();
            const fileName = `${Math.random()}${fileExt}`;
            const filePath = `${fileName}`;

            let { error } = await supabase.storage
            .from("images")
            .upload(filePath, file);

            if (error) {
                throw error;
            }

            const { data: url } = await supabase.storage
            .from("images")
            .getPublicUrl(filePath);

            setFileUrl(url.publicUrl);
            alert("File uploading successfully")

        } catch (error) {
            alert("Error uploading file:", error.message);

        } finally {
            setUploading(false);
        }
    }


  return (
    <div>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload"}
        </button>
        {fileUrl && (
            <div>
                <p>File uploaded to: {fileUrl}</p>
                <img src={fileUrl} alt='image file' width={300} height={300}/>
            </div>
        )}
       
    </div>
  )
}

export default page
