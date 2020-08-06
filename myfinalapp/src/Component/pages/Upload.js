import React from 'react'
const axios = require("axios");

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:5000/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="file" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Upload;



// import React, { useState } from 'react';

// export default function Upload(){
//     const [fileInputState,setFileInputState]=useState('');
//     const [previewSource,setPreviewSource]=useState('');
//     const [selectedFile,setSelectedFile]=useState('');

//     const handleFileInputChange=(e)=>{
//         const file=e.target.files[0];
//         previewFile(file);
//     };
//     const previewFile=(file)=>{
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend=()=>{
//             setPreviewSource(reader.result);
//         }
//     }
//     return (
//         <div>
//             <h1> upload</h1>
//             <form> 
//                 <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState}/>
//                 <button className="btn btn-primary" type="submit">Submit</button>
//             </form>
//             {previewSource &&(
//                 <img src={previewSource} alt="chosen" style={{height:"300px"}}/>
//             )}
//         </div>
//     )
// }

// import React from 'react';
// import Dropzone from 'react-dropzone';
// // import {Icon} from 'antd';
// export default function Upload(){
//     return (
//         <div style={{display:"flex",justifyContent:"space-between"}}>
//             <h1>this is some text</h1>
//             <Dropzone
//             onDrop
//             multiple
//             maxSize
//             >
                
//                 {({getRootProps,getInputProps})=>(
//                     <div style={{ width:"300px",height:"240px",border:"1px solid lightgray", 
//                     display:"flex",alignItems:"center",justifyContent:"center"}}
//                     {...getInputProps()}
//                     >
//                         <input {...getInputProps()} />
//                         <Icon type="plus" style={{fontSize:'3rem'}}/>

//                     </div>
                      
//                 )}

//             </Dropzone>
//         </div>

//     )
// }
