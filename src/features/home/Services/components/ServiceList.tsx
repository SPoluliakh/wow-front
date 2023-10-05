import { Grid } from '@mui/material';
import { IServices } from '../interfaces';
import { useCartSize } from '../hooks';
import { ServiceListItem } from './ServiceListItem';

interface Props {
  services: IServices[];
}

export const ServiceList = ({ services }: Props) => {
  const { width, height } = useCartSize();

  return (
    <Grid
      container
      spacing={{ xs: 12, sm: 2, md: 2 }}
      sx={{
        gap: '20px',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 !important',
        width: '100% !important',
      }}
    >
      {services.map(({ id, title, text, src }) => (
        <Grid item key={id} sx={{ p: '0 !important' }}>
          <ServiceListItem title={title} text={text} src={src} width={width} height={height} />
        </Grid>
      ))}
    </Grid>
  );
};
