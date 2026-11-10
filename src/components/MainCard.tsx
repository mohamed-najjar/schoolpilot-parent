// Adapted from Able Pro seed MainCard. One mounted content tree per card.
"use client";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
export default function MainCard({
  title,
  action,
  children,
}: {
  title?: React.ReactNode;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 2, boxShadow: "0 2px 6px rgb(20 38 50 / 3%)" }}
    >
      {title && (
        <>
          <CardHeader
            title={title}
            action={action}
            slotProps={{
              title: { variant: "h6", component: "h2", fontWeight: 600 },
            }}
          />
          <Divider />
        </>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
