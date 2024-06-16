import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Button } from '@mui/material';

interface PdfProps {
    fileType?: string;
    byteArray: string;
    previewStyle?: any;
}

export default function PdfViewer({ fileType = 'pdf', byteArray, previewStyle = {} }: PdfProps) {
    console.log('props:',)
    function filePreview() {
        if (!fileType || fileType.toLowerCase() === 'pdf') {

            let pdfWindow = window.open("", "file-preview");
            const doc = pdfWindow?.document;
            doc!.write(
                "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                encodeURI(byteArray) + "'></iframe>"
            )
            doc?.close();
        }

    }

    return (
        <div>
            <Button variant='text' onClick={filePreview}>
                <VisibilityOutlinedIcon />
            </Button>
        </div>
    )
}