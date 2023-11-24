// Nosotros.jsx

import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { Global, css } from '@emotion/react';

// Agrega la importación de la fuente
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  body {
    font-family: 'Bebas Neue', sans-serif;
    color: white; /* Cambia el color del texto a blanco */
  }
`;

const Nosotros = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      {/* Agrega el componente Global con los estilos globales */}
      <Global styles={globalStyles} />

      <Typography variant="h3" gutterBottom>
        Acerca de Digital Tech
      </Typography>
      <Typography paragraph style={{ marginBottom: '20px' }}>
        Digital Tech es un ecommerce líder en Argentina, especializado en la venta de productos tecnológicos
        variados. Con más de 10 años de experiencia en el mercado, nos enorgullece ofrecer los mejores precios
        y una amplia gama de productos para satisfacer las necesidades de nuestros clientes.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Ubicación
      </Typography>

      <Grid container spacing={2} style={{ marginBottom: '30px' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            {/* Aquí deberías usar tu propia clave de API de Google Maps */}
            <iframe
              title="Ubicación de Digital Tech"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: '0' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.2296333438795!2d-68.05730178497311!3d-38.95192957951043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9617b0f5b37d8ed5%3A0x146f51ec1a6bc8ac!2sNeuqu%C3%A9n%2C%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1sen!2sus!4v1639420904365!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography paragraph>
            Nos encontramos en la vibrante ciudad de Neuquén, Argentina, desde donde gestionamos y distribuimos
            nuestros productos a lo largo y ancho del país. Nuestra ubicación estratégica nos permite ofrecer
            envíos rápidos y eficientes a todos nuestros clientes.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nosotros;
