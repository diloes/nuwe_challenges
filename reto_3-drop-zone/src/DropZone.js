import {useDropzone} from 'react-dropzone'
import './dropZone.css'

function DropZone() {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone()

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="container">

      <div className='dropzone__form'>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <div>
            <h3>ARRASTRA TUS ARCHIVOS AQUÍ</h3>
          </div>
        </div>
        <button>Subir archivos</button>
        {
          files.length > 0 ?
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          : '' 
        }
      </div>
      
      <div className='google-drive'>
        <h3>Bienvenido a DDrop</h3>
        <p>Para subir tus archivos de forma simple a drive, 
        puedes hacer Login a través de Google.</p>
        <hr/>
        <button>Login con Google</button>
      </div>

    </div>
  )
}

export default DropZone


//TODO: importar react-dropzone