import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Tabs, Tab, Grid, Chip, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Edit, Delete, Add, TableBar, Restaurant, Event } from "@mui/icons-material";

const initialMenus = [
  { 
    id: 1,
    name: "Menu Dégustation", 
    image: "/assets/steak.jpg", 
    price: "89.99",
    category: "Premium", 
    description: "A culinary journey featuring our chef's finest creations, including appetizer, main course, and dessert.",
    items: ["Foie Gras", "Wagyu Steak", "Crème Brûlée"]
  },
  { 
    id: 2,
    name: "Menu Végétarien", 
    image: "/assets/pasta.jpg", 
    price: "49.99",
    category: "Vegetarian", 
    description: "A delightful selection of vegetarian dishes showcasing fresh, seasonal ingredients.",
    items: ["Mushroom Risotto", "Vegetable Lasagna", "Fruit Tart"]
  },
  { 
    id: 3,
    name: "Menu Business", 
    image: "/assets/salad.jpg", 
    price: "39.99",
    category: "Business", 
    description: "Perfect for business lunches, featuring quick and elegant options.",
    items: ["Caesar Salad", "Grilled Salmon", "Tiramisu"]
  },
  { 
    id: 4,
    name: "Menu Enfant", 
    image: "/assets/dessert.jpg", 
    price: "24.99",
    category: "Kids", 
    description: "Specially designed for our younger guests with kid-friendly portions and options.",
    items: ["Chicken Nuggets", "Mac & Cheese", "Ice Cream Sundae"]
  }
];

const initialTables = [
  { id: 1, number: "1", capacity: 4, status: "Available" },
  { id: 2, number: "2", capacity: 6, status: "Occupied" },
  { id: 3, number: "3", capacity: 2, status: "Reserved" },
  { id: 4, number: "4", capacity: 8, status: "Available" },
];

const initialReservations = [
  {
    id: 1,
    customerName: "John Doe",
    date: "2024-03-20",
    time: "19:00",
    guests: 4,
    tableId: 1,
    status: "Confirmed",
    specialRequests: "Window seat preferred",
    contactNumber: "+1234567890"
  },
  {
    id: 2,
    customerName: "Jane Smith",
    date: "2024-03-21",
    time: "20:00",
    guests: 2,
    tableId: 3,
    status: "Pending",
    specialRequests: "Anniversary celebration",
    contactNumber: "+1987654321"
  }
];

const Responsable = () => {
  const [menus, setMenus] = useState(initialMenus);
  const [tables, setTables] = useState(initialTables);
  const [reservations, setReservations] = useState(initialReservations);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ 
    id: null, 
    name: "", 
    category: "", 
    description: "", 
    image: "", 
    price: "",
    items: [] 
  });
  const [openTable, setOpenTable] = useState(false);
  const [isEditingTable, setIsEditingTable] = useState(false);
  const [editTableData, setEditTableData] = useState({ id: null, number: "", capacity: "", status: "" });
  const [activeTab, setActiveTab] = useState(0);
  const [openReservation, setOpenReservation] = useState(false);
  const [isEditingReservation, setIsEditingReservation] = useState(false);
  const [editReservationData, setEditReservationData] = useState({
    id: null,
    customerName: "",
    date: "",
    time: "",
    guests: "",
    tableId: "",
    status: "Pending",
    specialRequests: "",
    contactNumber: ""
  });

  const handleOpenEdit = (menu) => {
    setIsEditing(true);
    setEditData(menu);
    setOpen(true);
  };

  const handleOpenAdd = () => {
    setIsEditing(false);
    setEditData({ 
      id: null, 
      name: "", 
      category: "", 
      description: "", 
      image: "", 
      price: "",
      items: [] 
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData({ id: null, name: "", category: "", description: "", image: "", price: "", items: [] });
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      setMenus(prev => prev.map(m => (m.id === editData.id ? editData : m)));
    } else {
      setMenus(prev => [...prev, { ...editData, id: Date.now() }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setMenus(prev => prev.filter(m => m.id !== id));
  };

  const handleOpenTableEdit = (table) => {
    setIsEditingTable(true);
    setEditTableData(table);
    setOpenTable(true);
  };

  const handleOpenTableAdd = () => {
    setIsEditingTable(false);
    setEditTableData({ id: null, number: "", capacity: "", status: "" });
    setOpenTable(true);
  };

  const handleCloseTable = () => {
    setOpenTable(false);
    setEditTableData({ id: null, number: "", capacity: "", status: "" });
  };

  const handleTableChange = (e) => {
    setEditTableData({ ...editTableData, [e.target.name]: e.target.value });
  };

  const handleTableSubmit = () => {
    if (isEditingTable) {
      setTables(prev => prev.map(t => (t.id === editTableData.id ? editTableData : t)));
    } else {
      setTables(prev => [...prev, { ...editTableData, id: Date.now() }]);
    }
    handleCloseTable();
  };

  const handleDeleteTable = (id) => {
    setTables(prev => prev.filter(t => t.id !== id));
  };

  const handleOpenReservationEdit = (reservation) => {
    setIsEditingReservation(true);
    setEditReservationData(reservation);
    setOpenReservation(true);
  };

  const handleOpenReservationAdd = () => {
    setIsEditingReservation(false);
    setEditReservationData({
      id: null,
      customerName: "",
      date: "",
      time: "",
      guests: "",
      tableId: "",
      status: "Pending",
      specialRequests: "",
      contactNumber: ""
    });
    setOpenReservation(true);
  };

  const handleCloseReservation = () => {
    setOpenReservation(false);
    setEditReservationData({
      id: null,
      customerName: "",
      date: "",
      time: "",
      guests: "",
      tableId: "",
      status: "Pending",
      specialRequests: "",
      contactNumber: ""
    });
  };

  const handleReservationChange = (e) => {
    setEditReservationData({ ...editReservationData, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = () => {
    if (isEditingReservation) {
      setReservations(prev => prev.map(r => (r.id === editReservationData.id ? editReservationData : r)));
    } else {
      setReservations(prev => [...prev, { ...editReservationData, id: Date.now() }]);
    }
    handleCloseReservation();
  };

  const handleDeleteReservation = (id) => {
    setReservations(prev => prev.filter(r => r.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed": return "green";
      case "Pending": return "orange";
      case "Cancelled": return "red";
      default: return "gray";
    }
  };

  return (
    <Box sx={{ width: "100%", py: 5, backgroundColor: "black", color: "white", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="#A68E5D">
        essm l restaurant
      </Typography>

      <Tabs 
        value={activeTab} 
        onChange={(e, newValue) => setActiveTab(newValue)}
        sx={{ mb: 4, '& .MuiTab-root': { color: '#A68E5D' }, '& .Mui-selected': { color: 'white !important' } }}
      >
        <Tab label="Menus" />
        <Tab label="Tables" />
        <Tab label="Reservations" />
      </Tabs>

      {activeTab === 0 ? (
        <>
          <Button 
            startIcon={<Add />} 
            onClick={handleOpenAdd} 
            variant="contained" 
            sx={{ backgroundColor: "#A68E5D", mb: 4, fontWeight: "bold", "&:hover": { backgroundColor: "#8c7845" } }}
          >
            Add New Menu
          </Button>

          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            flexWrap: "wrap", 
            gap: 3, 
            px: 5 
          }}>
            {menus.map((menu) => (
              <Card 
                key={menu.id} 
                sx={{ 
                  maxWidth: 300, 
                  minWidth: 250, 
                  backgroundColor: "#1a1a1a", 
                  border: "1px solid #A68E5D", 
                  borderRadius: 3, 
                  boxShadow: 3, 
                  position: "relative" 
                }}
              >
                <CardMedia 
                  component="img" 
                  image={menu.image} 
                  alt={menu.name} 
                  sx={{ height: 200, objectFit: "cover", borderRadius: "5px 5px 0 0" }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="white">
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" color="#A68E5D">
                    {menu.category}
                  </Typography>
                  <Typography variant="h6" color="#A68E5D" sx={{ mt: 1 }}>
                    ${menu.price}
                  </Typography>
                  <Typography variant="body2" color="gray" mt={1}>
                    {menu.description}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {menu.items.map((item, index) => (
                      <Chip 
                        key={index}
                        label={item}
                        size="small"
                        sx={{ 
                          backgroundColor: '#2a2a2a',
                          color: '#A68E5D',
                          border: '1px solid #A68E5D'
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                    <IconButton onClick={() => handleOpenEdit(menu)} sx={{ color: "#A68E5D" }}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(menu.id)} sx={{ color: "red" }}>
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </>
      ) : activeTab === 1 ? (
        <>
          <Button 
            startIcon={<Add />} 
            onClick={handleOpenTableAdd} 
            variant="contained" 
            sx={{ backgroundColor: "#A68E5D", mb: 4, fontWeight: "bold", "&:hover": { backgroundColor: "#8c7845" } }}
          >
            Add New Table
          </Button>

          <Grid container spacing={3} sx={{ px: 5 }}>
            {tables.map((table) => (
              <Grid item xs={12} sm={6} md={4} key={table.id}>
                <Card sx={{ 
                  backgroundColor: "#1a1a1a", 
                  border: "1px solid #A68E5D", 
                  borderRadius: 3, 
                  boxShadow: 3 
                }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="white">
                      Table {table.number}
                    </Typography>
                    <Typography variant="body2" color="#A68E5D">
                      Capacity: {table.capacity} persons
                    </Typography>
                    <Typography variant="body2" color={table.status === "Available" ? "green" : table.status === "Occupied" ? "red" : "orange"}>
                      Status: {table.status}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                      <IconButton onClick={() => handleOpenTableEdit(table)} sx={{ color: "#A68E5D" }}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteTable(table.id)} sx={{ color: "red" }}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Button 
            startIcon={<Add />} 
            onClick={handleOpenReservationAdd} 
            variant="contained" 
            sx={{ backgroundColor: "#A68E5D", mb: 4, fontWeight: "bold", "&:hover": { backgroundColor: "#8c7845" } }}
          >
            Add New Reservation
          </Button>

          <Grid container spacing={3} sx={{ px: 5 }}>
            {reservations.map((reservation) => (
              <Grid item xs={12} sm={6} md={4} key={reservation.id}>
                <Card sx={{ 
                  backgroundColor: "#1a1a1a", 
                  border: "1px solid #A68E5D", 
                  borderRadius: 3, 
                  boxShadow: 3 
                }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" color="white">
                      {reservation.customerName}
                    </Typography>
                    <Typography variant="body2" color="#A68E5D">
                      Date: {reservation.date} at {reservation.time}
                    </Typography>
                    <Typography variant="body2" color="#A68E5D">
                      Guests: {reservation.guests}
                    </Typography>
                    <Typography variant="body2" color="#A68E5D">
                      Table: {reservation.tableId}
                    </Typography>
                    <Typography variant="body2" color={getStatusColor(reservation.status)}>
                      Status: {reservation.status}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{ mt: 1 }}>
                      {reservation.specialRequests}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      Contact: {reservation.contactNumber}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                      <IconButton onClick={() => handleOpenReservationEdit(reservation)} sx={{ color: "#A68E5D" }}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteReservation(reservation.id)} sx={{ color: "red" }}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* Menu Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{isEditing ? "Edit Menu" : "Add New Menu"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField name="name" label="Menu Name" value={editData.name} onChange={handleChange} />
          <TextField name="category" label="Category" value={editData.category} onChange={handleChange} />
          <TextField name="price" label="Price" type="number" value={editData.price} onChange={handleChange} />
          <TextField name="description" label="Description" multiline rows={3} value={editData.description} onChange={handleChange} />
          <TextField name="image" label="Image URL" value={editData.image} onChange={handleChange} />
          <TextField 
            name="items" 
            label="Menu Items (comma-separated)" 
            value={editData.items.join(", ")} 
            onChange={(e) => setEditData({ ...editData, items: e.target.value.split(",").map(item => item.trim()) })}
            helperText="Enter menu items separated by commas"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: "#A68E5D" }}>
            {isEditing ? "Save Changes" : "Add Menu"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Table Dialog */}
      <Dialog open={openTable} onClose={handleCloseTable} fullWidth>
        <DialogTitle>{isEditingTable ? "Edit Table" : "Add New Table"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField 
            name="number" 
            label="Table Number" 
            value={editTableData.number} 
            onChange={handleTableChange} 
          />
          <TextField 
            name="capacity" 
            label="Capacity" 
            type="number" 
            value={editTableData.capacity} 
            onChange={handleTableChange} 
          />
          <TextField 
            name="status" 
            label="Status" 
            select 
            value={editTableData.status} 
            onChange={handleTableChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Reserved">Reserved</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTable} color="inherit">Cancel</Button>
          <Button onClick={handleTableSubmit} variant="contained" sx={{ backgroundColor: "#A68E5D" }}>
            {isEditingTable ? "Save Changes" : "Add Table"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reservation Dialog */}
      <Dialog open={openReservation} onClose={handleCloseReservation} fullWidth>
        <DialogTitle>{isEditingReservation ? "Edit Reservation" : "Add New Reservation"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField 
            name="customerName" 
            label="Customer Name" 
            value={editReservationData.customerName} 
            onChange={handleReservationChange} 
          />
          <TextField 
            name="date" 
            label="Date" 
            type="date" 
            value={editReservationData.date} 
            onChange={handleReservationChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField 
            name="time" 
            label="Time" 
            type="time" 
            value={editReservationData.time} 
            onChange={handleReservationChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField 
            name="guests" 
            label="Number of Guests" 
            type="number" 
            value={editReservationData.guests} 
            onChange={handleReservationChange} 
          />
          <FormControl fullWidth>
            <InputLabel>Table</InputLabel>
            <Select
              name="tableId"
              value={editReservationData.tableId}
              onChange={handleReservationChange}
              label="Table"
            >
              {tables.map((table) => (
                <MenuItem key={table.id} value={table.id}>
                  Table {table.number} ({table.capacity} persons)
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={editReservationData.status}
              onChange={handleReservationChange}
              label="Status"
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
          <TextField 
            name="contactNumber" 
            label="Contact Number" 
            value={editReservationData.contactNumber} 
            onChange={handleReservationChange} 
          />
          <TextField 
            name="specialRequests" 
            label="Special Requests" 
            multiline 
            rows={3} 
            value={editReservationData.specialRequests} 
            onChange={handleReservationChange} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReservation} color="inherit">Cancel</Button>
          <Button onClick={handleReservationSubmit} variant="contained" sx={{ backgroundColor: "#A68E5D" }}>
            {isEditingReservation ? "Save Changes" : "Add Reservation"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Responsable;
