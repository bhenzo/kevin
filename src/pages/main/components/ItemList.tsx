import { Box, Table, TableThead } from "@mantine/core"
import { Item } from "../MainPage"

interface Props {
    items: Item[]
}

const Row = ({ item }: { item: Item }) => {
    return <Table.Tr >
        <Table.Td>{item.name}</Table.Td>
        <Table.Td>{item.qty}</Table.Td>
        <Table.Td>{item.unitPrice}</Table.Td>
        <Table.Td>{item.qty * item.unitPrice}</Table.Td>
    </Table.Tr>
}

export const ItemList = ({ items }: Props) => {


    return <Box p={'sm'} mih={300}><Table>
        <Table.Thead>
            <Table.Tr>
                <Table.Th>Producto</Table.Th>
                <Table.Th>Cantidad</Table.Th>
                <Table.Th>Precio Unitario</Table.Th>
                <Table.Th>Total</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {items.map((itm, idx) => <Row key={idx} item={itm} />)}
        </Table.Tbody>
    </Table></Box>
}