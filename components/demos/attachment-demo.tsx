import { Attachment, AttachmentList } from "@/components/ui/attachment";

export default function AttachmentDemo() {
  return (
    <AttachmentList className="w-full max-w-sm">
      <Attachment
        name="training-plan.pdf"
        type="application/pdf"
        size={2_400_000}
      />
      <Attachment
        name="session-recording.mp4"
        type="video/mp4"
        status="uploading"
        progress={62}
      />
    </AttachmentList>
  );
}
