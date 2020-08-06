import React, { Component } from 'react';
import axios from 'axios';
class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            file:null
         };
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange=(e)=> {
        this.setState({file:e.target.files[0]});
    }
    render() { 
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
          );
    }
}
 
export default FileUpload;



// import React,{Fragment,useState} from'react';
// import axios from 'axios';
// const FileUpload =()=>{
//     const [file ,setFile] = useState('');
//     const [filename,setFilename] = useState('Choose File'); 
//     const [uploadedFile,setUploadedFile]= useState({}); 
//     const onchangeFile= e =>{
//         setFile(e.target.files[0]);
//         setFilename(e.target.files[0].name);
//     };
//     const onSubmit= async e=>{
//         e.preventDefault();
//         const formData =new FormData();
//         formData.append('fileimage',file);

//         try {
//             const res=await axios.post('http://localhost:5000/new-ad-post/new-add',formData,{
//                 headers:{
//                     'Content-Type':'multipart/form-data'
//                 }
//             }); 
//             const {fileName,filePath}=res.data;
//             setUploadedFile({fileName,filePath});
           
//         } catch(err){
//            if(err.response.status===500){
//                console.log('there is an error on the server');
//            } else {
//                console.log(err.response.data.msg)
//            }    
//         } 
//     }
//     return (
//         <Fragment>
//             <form onSubmit={onSubmit}>
//                 <div className="custom-file">
//                     <input type="file" className="custom-file-input" id="customFile" onChange={onchangeFile} />
//                     <label className="custom-file-label" htmlFor="customFile">
//                         {filename }
//                     </label>
//                 </div>
//                 <input  type="submit" value="upload" className="btn btn-primary"/>
//             </form>
//             { uploadedFile ? <div className="row">
//                 <div className="col-md-6 ">
//                     <h3 className="text-center">{uploadedFile.fileName}</h3>
                   
//                     <img  src={uploadedFile.filePath} alt="imageupload"/>
//                 </div>
//             </div>
//             : null}
//         </Fragment>
//     )
// }
// export default FileUpload;