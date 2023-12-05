
import { useState,FormEvent, ChangeEvent, DragEvent } from 'react';
import axios from 'axios';

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Close, Refresh, Upload } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import TextConverter from './TextConverter';



const PdfViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfText, setPdfText] = useState({});

  const fileType = ['application/pdf'];
 
  const handleFileChange = (e:FormEvent<HTMLInputElement>):void => {
    const selectedFile = e.currentTarget.files?.[0];
    handleFile(selectedFile as File);
  };

  const handleDragOver = (e:DragEvent):void => {
    e.preventDefault();
  };

  const handleDrop = (e:DragEvent):void => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    handleFile(selectedFile);
  };

  const handleFile = async (file:File):Promise<void> => {
    if (file && fileType.includes(file.type)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (e:any) => {
        setPdfFile(e.target.result as any);
        setViewPdf(e.target.result as any);
        handleUpload(file);
        //handleUploadHtml(file);
        
      };
      
    } else {
      setPdfFile(null);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const handleUpload = (file:File) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios
        .post('http://localhost:3002/getText', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          setPdfText(response.data);
          
          // Handle the response as needed
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          // Handle errors
        });
    } else {
      console.log('Please select a file');
    }
  };
  const handleUploadHtml = (file:File) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios
        .post('http://localhost:3002/pdftohtml', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          setPdfText(response.data);
          
          // Handle the response as needed
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          // Handle errors
        });
    } else {
      console.log('Please select a file');
    }
  };

  const handleClearPdf=()=>{
    setPdfFile(null)
    setViewPdf(null)
  }
  console.log(typeof pdfText)
  return (
    <div className="container">
        <div className="page">
            <div className="viewer-side">
                <form 
                onSubmit={handleSubmit}
                >
                    {!pdfFile&&
                    <label
                    htmlFor="file-input"
                    className="select-pdf-label"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    >
                        <Upload/>
                            PDF dosyasını sürükle bırak veya seç
                        <input
                            type="file"
                            id="file-input"
                            className="form-control"
                            style={{ display: 'none' }}
                            accept="application/pdf"
                            onChange={handleFileChange}
                        />
                    </label>}
                {viewPdf&&
                <div className="buttons-in-row">
            
                        {pdfFile && (
                        
                        <IconButton
                            onClick={handleSubmit}
                        >
                            <Refresh/>
                        </IconButton>
                        )}
                        <IconButton
                            onClick={handleClearPdf}
                            className='close-button'
                        >
                            <Close/>
                        </IconButton>
                </div>
            }
            
                </form>

                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <div
                    style={{
                        height: '750px',
                        width: '900px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'flex',
                    }}
                    >
                    {viewPdf && (
                        <>
                        <Viewer fileUrl={`${viewPdf}`} />
                        </>
                    )}
                    </div>
                </Worker>
            </div>
        
                    {viewPdf !==null&&<TextConverter
                        result={pdfText}
                    />}
                
                {/* {viewPdf&&pdfText&&
                    <TextConverter
                        result={pdfText}
                    />
                } */}

        </div>
      
    </div>
  );
};

export default PdfViewer;
