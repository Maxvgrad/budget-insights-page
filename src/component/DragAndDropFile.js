import React, {useState, useRef} from 'react'
import '../index.css'
import styles from './DragAndDropFile.module.css'
import uploadBankStatement from "../resource/statement/api";

function DragAndDropFile() {

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    // TODO: Make utils
    const createFormData = function(file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        return formData;
    }

    const handleInputFileChange = function(e) {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            uploadBankStatement({
                data: createFormData(e.target.files[0])
            });
        }
    }

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            console.log(e.dataTransfer.files[0]);
            uploadBankStatement({
                data: createFormData(e.dataTransfer.files[0])
            }).then((response) => {
                console.log(response)
            })
            ;
        }
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };


    return (
        <form className="form form_type_upload" onDragEnter={handleDrag} onSubmit={e => e.preventDefault()}>
            <input ref={inputRef}
                   type="file"
                   id="input-file-upload"
                   className="input input_type_file"
                   multiple={true}
                   onChange={handleInputFileChange}
            />
            <label className={`label ${dragActive ? 'label_active' : ''}`} htmlFor="input-file-upload">
                <div>
                    <p>Drag and drop your file here or</p>
                    <button className="button button_type_upload"
                            onClick={onButtonClick}>
                        Upload a file
                    </button>
                </div>
            </label>
            { dragActive && <div className={`${styles.dragFileElement}`}
                                 onDragEnter={handleDrag}
                                 onDragLeave={handleDrag}
                                 onDragOver={handleDrag}
                                 onDrop={handleDrop}></div>
            }
        </form>
    );
}

export default DragAndDropFile;
