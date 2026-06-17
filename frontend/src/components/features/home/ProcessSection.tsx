import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const steps = [
  { id: "01", title: "Book\nAppointment", desc: "Schedule your\nconvenient slot" },
  { id: "02", title: "Consult\nSpecialist", desc: "Meet our\nexpert doctors" },
  { id: "03", title: "Accurate\nDiagnosis", desc: "Advanced\ntests &\nevaluation" },
  { id: "04", title: "Personalized\nTreatment", desc: "Tailored\ntreatment plan\nfor you" },
  { id: "05", title: "Better\nRecovery", desc: "Continuous\ncare for\nhealthy life" },
];

export function ProcessSection() {
  const activeStep = 2; // "03" is active

  return (
    <Box component="section" id="process" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8F9FE', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: 2 }}>
        
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              fontWeight: 800, 
              letterSpacing: '0.1em', 
              color: '#A855F7', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              mb: 1
            }}
          >
            YOUR JOURNEY WITH US
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              color: '#1E293B', 
              fontSize: { xs: '1.875rem', md: '2.5rem' },
            }}
          >
            Our Patient Care Process
          </Typography>
        </Box>
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2, md: 2, lg: 1 }}
          sx={{ 
            flexWrap: { xs: 'nowrap', md: 'wrap', lg: 'nowrap' },
            justifyContent: "center",
            alignItems: { xs: 'flex-start', md: 'center' },
            rowGap: { xs: 0, md: 6 }, 
            maxWidth: '1200px', 
            mx: 'auto' 
          }}
        >
          {steps.map((step, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;
            const isUpcoming = index > activeStep;

            return (
              <React.Fragment key={step.id}>
                <Stack 
                  direction="row" 
                  spacing={1.5} 
                  sx={{ 
                    alignItems: "center",
                    width: { xs: '100%', md: 'calc(50% - 16px)', lg: 'auto' },
                    flex: { lg: 1 }
                  }}
                >
                  {/* Circle */}
                  <Box 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1rem',
                      flexShrink: 0,
                      ...(isCompleted && {
                        bgcolor: '#8B5CF6',
                        color: 'white',
                      }),
                      ...(isActive && {
                        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                        color: 'white',
                        boxShadow: '0 4px 20px rgba(236,72,153,0.4)',
                      }),
                      ...(isUpcoming && {
                        bgcolor: 'white',
                        border: '2px solid #e9d5ff',
                        color: '#8B5CF6',
                      }),
                    }}
                  >
                    {step.id}
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: '15px', color: '#1E293B', lineHeight: 1.3, whiteSpace: 'pre-line' }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#64748b', mt: 0.5, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Stack>

                {/* Connectors */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal Arrow Connector (Tablet/Desktop) */}
                    <Box sx={{ 
                      display: { xs: 'none', md: 'flex' }, 
                      alignItems: 'center', 
                      width: 32,
                      flexShrink: 0
                    }}>
                      <Box sx={{ 
                        flex: 1, 
                        height: '2px', 
                        bgcolor: isCompleted ? '#8B5CF6' : 'transparent',
                        borderTop: isCompleted ? 'none' : '2px dashed #d8b4fe',
                      }} />
                      <Box sx={{ 
                        width: 0, 
                        height: 0, 
                        borderTop: '4px solid transparent', 
                        borderBottom: '4px solid transparent', 
                        borderLeft: `6px solid ${isCompleted ? '#8B5CF6' : '#d8b4fe'}`,
                        ml: '-1px'
                      }} />
                    </Box>

                    {/* Vertical Divider Connector (Mobile) */}
                    <Box 
                      sx={{ 
                        display: { xs: 'block', md: 'none' },
                        width: '2px', 
                        height: '24px', 
                        bgcolor: isCompleted ? '#8B5CF6' : 'transparent',
                        borderLeft: isCompleted ? 'none' : '2px dashed #d8b4fe',
                        ml: '23px', // centers perfectly under the 48px circle
                      }} 
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </Stack>
        
      </div>
    </Box>
  );
}
