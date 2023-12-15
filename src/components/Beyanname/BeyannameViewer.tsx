
import { useState,FormEvent, ChangeEvent, DragEvent } from 'react';
import axios from 'axios';

import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Close, Refresh, Upload } from '@mui/icons-material';
import { Button, CircularProgress, IconButton } from '@mui/material';
import "./beyanname.scss"



const BeyannameViewer = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfText, setPdfText] = useState<{[key: string]: any}>({});
  const [fetchingImage,setFetchingImage]=useState<boolean>(false)
  const [fetchingData,setFetchingData]=useState<boolean>(false)
  const [errMessage,setErrMessage]=useState<any>("")
  const [fileUrl, setFileUrl] = useState('');
  const [dollar, setDollar] = useState('');
  const [euro, setEuro] = useState('');
  const [statueText, setStatueText] = useState('');

  const [declarationNo, setDeclarationNo] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [responseText,setResponseText]=useState<string>("")

  const handleInputChangeDeclaration = (e:FormEvent<HTMLInputElement>):void => {
    const newValue = e.currentTarget.value;
    setDeclarationNo(newValue);
  };

  const handleInputChangeVerification = (e:FormEvent<HTMLInputElement>):void => {
    const newValue = e.currentTarget.value;

    setVerificationCode(newValue);
  };

  const handleTamam=()=>{
    setDeclarationNo("");
    setErrMessage("");
    setResponseText("");
    setVerificationCode("")
    setFileUrl("")
  }
  const handleSendFeedBack = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //22160100EX00086241

    try {
      setFetchingData(true)
      const serverUrl = 'https://beyanname-production.up.railway.app';
      //const serverUrl = 'http://localhost:5002';

      const response = await axios.post(`${serverUrl}/feedback`, {
        declarationNo: declarationNo,
        verificationCode: verificationCode,
      });
      if (response.status === 200) {
        console.log('Response:', response.data);
        var texted=response.data.text
        setResponseText(texted)
        setStatueText(response.data.statuetext)
        setErrMessage("")
        setFetchingData(false)

            if(String(texted).includes("Tarihi")){
              const dateRegex = /Kapanma Tarihi: (\d{2})\.(\d{2})\.(\d{4})/;
              const match = dateRegex.exec(texted);
              if (match && match[1] && match[2] && match[3]) {

                const day = match[1];
                const month = match[2];
                const year = match[3];
                
                // Construct the date string in the "DD/MM/YYYY" format
                const dateObjString = `${month}/${day}/${year}`;
                var date = new Date(dateObjString);
                var yesterday = new Date(dateObjString);
                yesterday.setDate(date.getDate() - 1);
                const postDate=yesterday.toLocaleDateString("tr")
                const responseCurr = await axios.post(`${serverUrl}/currget`, {
                  date: postDate,

                });

                setDollar(responseCurr.data.currencyUSDtext)
                setEuro(response.data.currencyEURtext)
                
                } else {
                console.log("Date not found in the text.");
                }
            
            } 
        
        
        }else {
          setFetchingData(false);
          setFileUrl("");
          setVerificationCode("")
          // If the status code is not 200, show an error message
          setErrMessage("İstek zaman aşımına uğramış olabilir. Lütfen tekrar deneyiniz")
          console.error('Error fetching file. Status code:', response.status);
        // You can set an error state or display a message to the user
      }

      // You can handle the response as needed
    } catch (error) {
      setErrMessage("Bir Hata Meydana geldi");
      setResponseText("")
      console.error('Error:', error);
      // Handle the error
    }finally {
      setFetchingData(false);
    }
  };
  const handleButtonClick = async () => {
    try {
      setFetchingImage(true);
      const serverUrl = 'https://beyanname-production.up.railway.app';
      //const serverUrl = 'http://localhost:5002';

      const response = await axios.post(`${serverUrl}/declaration`);
  
      // Check if the response status code is 200
      if (response.status === 200) {
        const fileDataUrl = `data:image/png;base64,${response.data}`;
        setFileUrl(fileDataUrl);
        setFetchingImage(false);
        setErrMessage("")

        // Display the image or perform other actions with the file URL
      } else {
        // If the status code is not 200, show an error message
        setFetchingImage(false)
        setErrMessage("lütfen tekrar deneyiniz")
        console.error('Error fetching file. Status code:', response.status);
        // You can set an error state or display a message to the user
      }
    } catch (error) {
      console.error('Error fetching file:', error);
      // Handle other errors (e.g., network issues) here
    } finally {
      setFetchingImage(false);
    }
  };
  

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
        .post('http://localhost:3007/getPdfImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          //setPdfText(response.data);
          console.log(response.data)
          
          // Handle the response as needed
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
          // Handle errors
        });
    } else {
      console.log('Lütfen dosya seçiniz');
    }
  };

  const handleClearPdf=()=>{
    setPdfFile(null)
    setViewPdf(null)
  }
  
  type result = {
    success: boolean;
    billType:string;
    Cari_Adı: string;
    Cari_Vkn_Tckn: any[]; // Replace 'any' with the actual type if known
    Fatura_No: any[];
    Fatura_Tarihi: any[];
    Fatura_Tipi: any[];
    Senaryo: any[];
    ETTN: any[];
    KDV_Oranı: any[];
    KDV_Tutari: any[];
    Hizmet_Toplam_Tutar: any[];
    Genel_Toplam: any[];


  };
  return (
    <div className="container">
        <div className="page">
            <div className="declaration-view">
                {/* <form 
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
            
                </form> */}

                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
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
                </Worker> */}
                
                
                  <div
                    className='declaration-form-container'
                  >
                    <Button
                      style={{textTransform:"none",marginBottom:20}}
                      variant="contained"
                      className='wide-btn'
                      fullWidth
                      onClick={handleButtonClick}
                      disabled={fetchingImage}
                    >
                      Beyanname Sorgula
                    </Button>
                    {fetchingData&&<div className='loading-inner-div'>
                      <CircularProgress/>
                    </div>}
                    {fileUrl &&
                        <form 
                          className='declaration-form'
                          onSubmit={handleSendFeedBack}
                        >
                            {errMessage&&<span>{errMessage}</span>}
                        <label>
                          <span>Beyanname Numarası</span>
                          <input placeholder='beyanname numarasını giriniz' required type="text" value={declarationNo} onChange={handleInputChangeDeclaration} />
                        </label>
                        <br />
                        <img 
                            src={fileUrl} alt="Screenshot" />
                        <br/>
                        <label>
                          <span>Güvenlik Kodu</span>
                          <input placeholder='işlem sonucu' required type="text" value={verificationCode} onChange={handleInputChangeVerification} />
                        </label>
                        <br />
                        {!responseText?<Button 
                        variant='contained'
                        className='wide-btn'
                        fullWidth
                        type="submit">
                          Gönder
                        </Button>:<Button
                        fullWidth
                          className='wide-btn'
                        onClick={handleTamam}
                        variant='outlined'
                        >Tamam</Button>}

                        {statueText&&
                          <div
                            className='curr-responses'
                          >
                            <span>{statueText}</span>

                          </div>
                        }
                        {responseText&&
                        <span
                          className='response-text'
                        >{responseText}</span>}
                        {dollar||euro&&<div
                          className='curr-responses'
                        >
                        {dollar&&
                        <div className='curr-container USDBuy'>
                          <span className='curr-title' >Dolar</span>
                          <span className='curr-value'>{dollar} ₺</span>
                        </div>
                        }
                        {euro&&
                        <div className='curr-container USDBuy'>
                          <span className='curr-title' >Euro</span>
                          <span className='curr-value'>{euro} ₺</span>
                        </div>
                        }
                        </div>}
                        </form>
                    }
                    </div>                
                
            
            </div>
            
        
                
                

        </div>
      
    </div>
  );
};

export default BeyannameViewer;
