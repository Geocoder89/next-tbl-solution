'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  Input,
  Card,
  CardBody,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
} from '@nextui-org/react';
import { Order } from '@/lib/interfaces/Order';
import { useRouter } from 'next/navigation';

const OrderList: React.FC = () => {
  const [loadedOrders, setLoadedOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedOrders: Order[] = [];
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('order-')) {
        const orderData = localStorage.getItem(key);
        if (orderData) {
          storedOrders.push(JSON.parse(orderData));
        }
      }
    });
    setLoadedOrders(storedOrders);
  }, []);

  useEffect(() => {
    setFilteredOrders(loadedOrders); // Reset filtered orders when orders are loaded
  }, [loadedOrders]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    filterOrders(query);
  };

  const filterOrders = (query: string) => {
    if (!query) {
      setFilteredOrders(loadedOrders); // If no search term, show all orders
    } else {
      setFilteredOrders(
        loadedOrders.filter(
          (order) =>
            order.name?.toLowerCase().includes(query.toLowerCase()) ||
            order.confirmationNumber
              ?.toLowerCase()
              .includes(query.toLowerCase()) ||
            order.generatedName?.toLowerCase().includes(query.toLowerCase()) ||
            order.city?.toLowerCase().includes(query.toLowerCase()) ||
            order.id.toString().includes(query.toLowerCase()) // Searching by ID as well
        )
      );
    }
  };
  const handleRowClick = (orderId: string) => {
    router.push(`/orders/${orderId}`);
  };

  const handleClear = () => {
    setSearchTerm(''); // Clear the search input
    setFilteredOrders(loadedOrders); // Reset the filtered orders to show all
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <Card className="max-w-6xl mx-auto">
        <CardBody>
          <div className="flex justify-between items-center mb-6">
            <Input
              // underlined
              label="Search Orders"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by name or confirmation number"
              className="w-full md:w-1/3"
            />
            <button
              onClick={handleClear}
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Clear
            </button>
          </div>
          <Table aria-label="Order List Table">
            <TableHeader>
              <TableColumn>Order ID</TableColumn>
              <TableColumn>Order Name</TableColumn>
              <TableColumn>Confirmation Number</TableColumn>
              <TableColumn>Quantity</TableColumn>
              <TableColumn>City</TableColumn>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow
                  key={order.id}
                  onClick={() => handleRowClick(order.id)}
                >
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.name || order.generatedName}</TableCell>
                  <TableCell>{order.confirmationNumber}</TableCell>
                  <TableCell>
                    {order.quantity || order.generatedQuantity}
                  </TableCell>
                  <TableCell>{order.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </section>
  );
};

export default OrderList;
