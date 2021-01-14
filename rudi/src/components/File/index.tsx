import React, {useState} from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import FileEntry from "./FileEntry";

const File = () => {

    let fileReader;
    const [fileEntry, setFileEntry] = useState([]);
    const [fileName, setFileName] = useState('Choose File')


    const handleReadFile = (e) => {
        const content = fileReader.result;
        const linesOfFile = content.split('\n');
        setFileEntry(linesOfFile);
    }

    const handleFile = (file) => {
        const files = file.target.files;
        if (files.length > 0) {
            fileReader = new FileReader();
            fileReader.onloadend = handleReadFile;
            fileReader.readAsText(files[0]);
            setFileName(files[0].name)
        } else {
            console.log('No file to read')
        }
    }

    return (
        <div >
            <Row>
                <Col xl={{span: 3}}>
                    <Form.Group as={Row}>
                        <Form.File  type="file" id="fileChoose" name="fileChoose" label={fileName} onChange={(e) => handleFile(e)} custom/>
                    </Form.Group>
                </Col>
            </Row>


            <Form.Group>
                <Form.Label>Names</Form.Label>
                {fileEntry.map((entry:string) => {
                    return (
                        <FileEntry entry={entry}/>
                    );
                })}
            </Form.Group>

        </div>
    )

}

export default File;