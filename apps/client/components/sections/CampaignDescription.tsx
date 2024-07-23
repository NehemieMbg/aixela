import ReactMarkdown from 'react-markdown';
import { projectDescription as description } from '@/constants';

const CampaignDescription = () => {
  return (
    <div>
      <ReactMarkdown className={'whitespace-pre-line'}>
        {description}
      </ReactMarkdown>
    </div>
  );
};
export default CampaignDescription;
