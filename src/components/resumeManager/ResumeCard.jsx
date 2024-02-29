import { Card, CardContent, Button } from '@mui/material';

function ResumeCard({ resume, onOpenEditor, onMakeCopy, onDownloadPDF }) {
   const handleOpenEditor = () => {
      onOpenEditor(resume.id);
   };

   const handleMakeCopy = () => {
      onMakeCopy(resume.id);
   };

   const handleDownloadPDF = () => {};

   return (
      <Card className="resumeCard">
         <CardContent>
            {/* Display snapshot of resume */}
            <div>{/* Add snapshot here */}</div>
            <Button onClick={handleOpenEditor}>Open in Editor</Button>
            <Button onClick={handleMakeCopy}>Make a Copy</Button>
            <Button onClick={handleDownloadPDF}>Download PDF</Button>
         </CardContent>
      </Card>
   );
}

export default ResumeCard;
