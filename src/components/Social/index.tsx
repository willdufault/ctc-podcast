import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'

interface Props {
  url: string
  Icon: IconProp
}

export default function Component({ url, Icon }: Props) {
  return (
    <>
      <a href={url} target="_blank">
        <Button variant="social" className="rounded-circle">
          <FontAwesomeIcon icon={Icon} size="lg"></FontAwesomeIcon>
        </Button>
      </a>
    </>
  )
}
