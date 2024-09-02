import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  url: string
  Icon: IconProp
}

export default function Component({ url, Icon }: Props) {
  return (
    <>
    <a href={url}>
      <Button variant='social' className='rounded-circle'>
        <FontAwesomeIcon icon={Icon} size='lg'></FontAwesomeIcon>
      </Button>
    </a>
    </>
  )
}