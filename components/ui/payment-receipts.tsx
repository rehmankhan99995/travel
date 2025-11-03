"use client"

import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Download, FileText, CheckCircle } from "lucide-react"

const receipts = [
  {
    id: 1,
    receiptId: "REC-001",
    date: "2024-11-01",
    amount: 2500,
    packageName: "Umrah Premium Package",
    status: "Verified",
    fileName: "payment_receipt_nov_2024.pdf",
  },
  {
    id: 2,
    receiptId: "REC-002",
    date: "2024-10-25",
    amount: 1800,
    packageName: "Makkah Express",
    status: "Verified",
    fileName: "payment_receipt_oct_2024.pdf",
  },
]

export default function PaymentReceipts() {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) setSelectedFile(file)
  }
const handleDownload = () => {
  const blob = new Blob(["Hello World"], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "example.txt"
  a.click()
  URL.revokeObjectURL(url)
}

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Payment Receipts</h1>
        <p className="text-muted-foreground">Upload and view payment receipts</p>
      </div>

      {/* Upload Area */}
      <Card className="p-8 mb-8">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-border bg-secondary/30"
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <Upload size={32} className="mx-auto mb-3 text-primary" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Upload Payment Receipt</h3>
          <p className="text-sm text-muted-foreground mb-4">Drag and drop your receipt or click to browse</p>

          <Button variant="outline" className="cursor-pointer inline-flex bg-transparent" onClick={handleButtonClick}>
            <Upload size={16} />
            Select File
          </Button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
          />

          {selectedFile && (
            <p className="text-sm text-green-600 mt-3 font-medium">
              ✅ Selected: {selectedFile.name}
            </p>
          )}

          <p className="text-xs text-muted-foreground mt-3">Accepted formats: PDF, JPG, PNG (Max 5MB)</p>
        </div>
      </Card>

      {/* Receipt List */}
      <div className="space-y-4">
        {receipts.map((receipt) => (
          <Card key={receipt.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-foreground">{receipt.fileName}</h3>
                    <Badge className="flex items-center gap-1 bg-green-600/10 text-green-700">
                      <CheckCircle size={14} />
                      {receipt.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Receipt ID</p>
                      <p className="font-semibold text-foreground">{receipt.receiptId}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-semibold text-foreground">{receipt.date}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Amount</p>
                      <p className="font-bold text-primary">${receipt.amount}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Package</p>
                      <p className="font-semibold text-foreground">{receipt.packageName}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={handleDownload} variant="outline" size="sm" className="cursor-pointer md:w-auto bg-transparent">
               
                <Download size={16} />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
