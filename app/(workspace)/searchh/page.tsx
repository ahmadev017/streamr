"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import React, { useState } from 'react'

const Page = () => {

  const data = [
    { sr: "1", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { sr: "2", status: "Pending", method: "Paypal", amount: "$100.00" },
    { sr: "3", status: "Paid", method: "Bank Transfer", amount: "$300.00" },
  ];

  const [inputValue, setInputValue] = useState('');


  const filteredData = data.filter((row) =>
    row.sr.includes(inputValue.trim())
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-2">
          <Input
            onChange={handleChange}
            value={inputValue}
            placeholder="Search by SR"
          />
          <Button type="submit" className="cursor-pointer">Search</Button>
        </div>
      </form>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">sr</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length > 0 ? (
            filteredData.map((row) => (
              <TableRow key={row.sr}>
                <TableCell className="font-medium">{row.sr}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No results found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Page;