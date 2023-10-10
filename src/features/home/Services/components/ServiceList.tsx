import { Grid } from '@mui/material';
import { IServices } from '../interfaces';
import { useCartGap, useCartSize } from '../hooks';
import { ServiceListItem } from './ServiceListItem';

interface Props {
  services: IServices[];
}

export const ServiceList = ({ services }: Props) => {
  const { width, height } = useCartSize();
  const { gap } = useCartGap();

  return (
    <Grid
      container
      spacing={{ xs: 12, sm: 2, md: 2 }}
      sx={{
        gap,
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 !important',
        width: '100% !important',
      }}
    >
      {services.map(({ id, title, text, src }) => (
        <Grid
          item
          key={id}
          sx={{
            p: '0 !important',
            flexBasis: {
              xs: '100%',
              sm: 'calc((100% - 30px * 1) / 2)',
              md: 'calc((100% - 20px * 2) / 3)',
            },
          }}
        >
          <ServiceListItem title={title} text={text} src={src} width={width} height={height} />
        </Grid>
      ))}
    </Grid>
  );
};
