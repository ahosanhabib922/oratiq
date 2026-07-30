import { FileUploader } from "@/components/ui/file-uploader";

export default function FileUploaderDemo() {
  return (
    <div className="w-full max-w-md">
      <FileUploader
        accept="image/*,.pdf"
        maxSize={5 * 1024 * 1024}
        label="Upload attachments"
      />
    </div>
  );
}
