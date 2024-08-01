import { AppShell, Box, Button, Container, Text } from "@mantine/core"
import { Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import { HouseIcon, LogsIcon, ScrollIcon, ScrollText, ScrollTextIcon, TagsIcon, WrenchIcon } from 'lucide-react'

export const Layout = () => {

    const options = [
        {
            name: 'Inicio',
            icon: <HouseIcon />
        },
        {
            name: 'Productos',
            icon: <TagsIcon />
        },
        {
            name: 'Servicios',
            icon: <WrenchIcon />
        },
        {
            name: 'Ventas',
            icon: <LogsIcon />
        },
        {
            name: 'Ordenes de trabajo',
            icon: <ScrollTextIcon />
        },
        {
            name: 'Nueva Orden',
            icon: <ScrollIcon />
        }
    ]


    return <AppShell
        header={{ height: 60 }}
        padding="md"
    >
        <AppShell.Header bg="#EEEEEE" classNames={{ header: styles['header'] }}>
            <Box p={'md'} visibleFrom="sm"><Text fw={700} color="#555555"> Kevinsoft</Text></Box>

            {options.map((opt, idx) => <Button variant="transparent" color="#555555" key={idx} leftSection={opt.icon}>
                <Text visibleFrom="sm">{opt.name}</Text>
            </Button>)}
        </AppShell.Header>


        <AppShell.Main>
            <Container>
                <Outlet />
            </Container>


        </AppShell.Main>
    </AppShell>
}