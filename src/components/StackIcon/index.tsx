import { Container, ProgressBar, Completed } from "./styles";

interface StackIconProps {
  stackName: string;
  imageUrl: string;
  progress: string;
  barColor: string;
  href?: string;
}

export default function StackIcon({
  stackName,
  imageUrl,
  progress,
  barColor,
  href,
}: StackIconProps) {
  return (
    <Container>
      <a href={href} target="_blank">
        <span>{stackName}</span>
        <img src={imageUrl} alt="" />
        <ProgressBar>
          <Completed style={{ width: progress, background: barColor }} />
          <span style={{ left: progress }}>{progress}</span>
        </ProgressBar>
      </a>
    </Container>
  );
}
