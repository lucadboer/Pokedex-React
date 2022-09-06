import { Container, Skeleton } from '@mui/material'
import React from 'react'

export function Skeletons() {
  return (
    <Container maxWidth="xxl">

    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} backgroundColor="ffff"/>
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />
    <Skeleton variant="rounded" width="100%" height={120} sx={{marginBottom: "1em"}} />

    </Container>
  )
}
