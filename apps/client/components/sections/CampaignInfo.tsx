import ReactMarkdown from 'react-markdown';
import { projectDescription as description } from '@/constants';

const CampaignInfo = () => {
  return (
    <div>
      <ReactMarkdown className={'whitespace-pre-line'}>
        {description}
      </ReactMarkdown>
    </div>
  );
};
export default CampaignInfo;
