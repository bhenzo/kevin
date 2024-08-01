import { Box, Button, Group, NumberInput, Paper, Stack, TextInput } from "@mantine/core"
import { ItemList } from "./components/ItemList"
import { useState } from "react";

export interface Item {
    name: string;
    qty: number;
    unitPrice: number;
}

export const MainPage = () => {
    const [newItem, setNewItem] = useState<Item>({
        qty: 1,
        unitPrice: 500,
        name: ''
    });
    const [items, setItems] = useState<Item[]>([
        { name: "Sistema con baclút", qty: 1, unitPrice: 20000 },
        { name: "Memoria ran", qty: 1, unitPrice: 15000 }
    ]);


    const col = '#347ab6';
    const addItem = () => {
        setItems([...items, { ...newItem }])
        setNewItem({
            qty: 1,
            unitPrice: 500,
            name: ''
        })
    }
    return <Stack>
        <Paper bd={`2px solid ${col}`} withBorder radius={'sm'} shadow="sm" >
            <Group bg={col} p={'xs'}>
                <NumberInput w={150} value={newItem.qty} onChange={(val) => setNewItem({ ...newItem, qty: val as number })} defaultValue={1} visibleFrom="sm" />
                <TextInput placeholder="Codigo o atajo..." w={150}
                    onKeyDown={(e) => e.key === 'Enter' && addItem()}
                    value={newItem.name || ''} onChange={(e) => setNewItem({ ...newItem, name: e.currentTarget.value })} />
                <Box w={'grow'} style={{ flexGrow: 1 }} />
                <Button color="green" onClick={addItem}>Agregar</Button>
            </Group>
            <ItemList items={items} />

            <Group bg={'#EEE'} p={'sm'} justify="end" >
                <Button color="red" >Imprimir presupuesto</Button>

                <Button color="red" >Borrar venta</Button>

                <Button color="yellow" >A Cuenta corriente</Button>

                <Button color="green" >Confirmar venta</Button>

            </Group>
        </Paper>
    </Stack>
}