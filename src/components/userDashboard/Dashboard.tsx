import React from 'react'
import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
   Box
} from "@mui/material";
import { spacing } from "@mui/system";
import styled from "@emotion/styled";


const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function EmptyCard() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Empty card
        </Typography>
        <Typography variant="body2" gutterBottom>
          Empty card
        </Typography>
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  return (
            <Box className='dashboard-wrapper'
        component="main"
        sx={{
          backgroundColor: 'lightblue'
        }}
      >
      <h1>Dashboard</h1>
      <Typography variant="h3" gutterBottom display="inline">
        Blank
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link href="/">
          Dashboard
        </Link>
        <Link  href="/">
          Pages
        </Link>
        <Typography>Blank</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard />
        </Grid>
      </Grid>
      </Box>
  );
}

export default Dashboard;