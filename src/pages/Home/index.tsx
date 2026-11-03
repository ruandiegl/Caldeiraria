import { segmentsContent } from '@/content/segmentsContent';
import { HomePage } from './homeStyles';
import { MainPhoto } from './sections/MainPhoto';
import { SegmentOverview } from './sections/SegmentOverview';

export default function Home() {
  return (
    <HomePage>
      <MainPhoto />
      <SegmentOverview segments={segmentsContent} />
    </HomePage>
  );
}
