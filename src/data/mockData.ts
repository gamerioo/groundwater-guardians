// Mock data for DWLR stations and time series data
export interface DWLRStation {
  id: string;
  lat: number;
  lng: number;
  location: string;
  waterLevel: number;
  status: 'good' | 'moderate' | 'critical';
  trend: 'up' | 'down' | 'stable';
  district: string;
  state: string;
  timestamp: string;
}

export interface TimeSeriesData {
  month: string;
  level: number;
  station: string;
}

export interface ActivityData {
  id: string;
  title: string;
  description: string;
  credits: number;
  difficulty: 'Low' | 'Medium' | 'High';
  impact: 'High' | 'Medium' | 'Low';
  icon: string;
}

// Generate mock DWLR stations across India
export const mockStations: DWLRStation[] = [
  // Delhi Region
  { id: 'DWLR001', lat: 28.6139, lng: 77.2090, location: 'Delhi Central', waterLevel: 15.2, status: 'good', trend: 'up', district: 'New Delhi', state: 'Delhi', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR002', lat: 28.7041, lng: 77.1025, location: 'Delhi North', waterLevel: 8.3, status: 'critical', trend: 'down', district: 'North Delhi', state: 'Delhi', timestamp: '2024-01-15T10:30:00Z' },
  
  // Mumbai Region
  { id: 'DWLR003', lat: 19.0760, lng: 72.8777, location: 'Mumbai Central', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'Mumbai', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR004', lat: 19.1176, lng: 72.9060, location: 'Mumbai Suburban', waterLevel: 18.7, status: 'good', trend: 'up', district: 'Mumbai Suburban', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  
  // Bangalore Region
  { id: 'DWLR005', lat: 12.9716, lng: 77.5946, location: 'Bangalore Central', waterLevel: 6.8, status: 'critical', trend: 'down', district: 'Bangalore Urban', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR006', lat: 12.9698, lng: 77.7500, location: 'Bangalore East', waterLevel: 11.2, status: 'moderate', trend: 'stable', district: 'Bangalore Urban', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  
  // Chennai Region
  { id: 'DWLR007', lat: 13.0827, lng: 80.2707, location: 'Chennai Central', waterLevel: 14.5, status: 'moderate', trend: 'up', district: 'Chennai', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR008', lat: 13.0674, lng: 80.2376, location: 'Chennai South', waterLevel: 16.8, status: 'good', trend: 'up', district: 'Chennai', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kolkata Region
  { id: 'DWLR009', lat: 22.5726, lng: 88.3639, location: 'Kolkata Central', waterLevel: 9.2, status: 'critical', trend: 'down', district: 'Kolkata', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR010', lat: 22.5675, lng: 88.3918, location: 'Kolkata East', waterLevel: 13.4, status: 'moderate', trend: 'stable', district: 'Kolkata', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  
  // Hyderabad Region
  { id: 'DWLR011', lat: 17.3850, lng: 78.4867, location: 'Hyderabad Central', waterLevel: 10.7, status: 'moderate', trend: 'down', district: 'Hyderabad', state: 'Telangana', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR012', lat: 17.4435, lng: 78.3772, location: 'Hyderabad North', waterLevel: 17.2, status: 'good', trend: 'up', district: 'Hyderabad', state: 'Telangana', timestamp: '2024-01-15T10:30:00Z' },
  
  // Pune Region
  { id: 'DWLR013', lat: 18.5204, lng: 73.8567, location: 'Pune Central', waterLevel: 11.8, status: 'moderate', trend: 'stable', district: 'Pune', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR014', lat: 18.5679, lng: 73.9143, location: 'Pune East', waterLevel: 19.3, status: 'good', trend: 'up', district: 'Pune', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  
  // Ahmedabad Region
  { id: 'DWLR015', lat: 23.0225, lng: 72.5714, location: 'Ahmedabad Central', waterLevel: 7.4, status: 'critical', trend: 'down', district: 'Ahmedabad', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR016', lat: 23.0395, lng: 72.6066, location: 'Ahmedabad North', waterLevel: 14.1, status: 'moderate', trend: 'up', district: 'Ahmedabad', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jaipur Region
  { id: 'DWLR017', lat: 26.9124, lng: 75.7873, location: 'Jaipur Central', waterLevel: 9.8, status: 'critical', trend: 'down', district: 'Jaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR018', lat: 26.9497, lng: 75.8205, location: 'Jaipur North', waterLevel: 13.2, status: 'moderate', trend: 'stable', district: 'Jaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR019', lat: 26.8851, lng: 75.8062, location: 'Jaipur South', waterLevel: 16.5, status: 'good', trend: 'up', district: 'Jaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Lucknow Region
  { id: 'DWLR020', lat: 26.8467, lng: 80.9462, location: 'Lucknow Central', waterLevel: 11.7, status: 'moderate', trend: 'stable', district: 'Lucknow', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR021', lat: 26.8754, lng: 80.9115, location: 'Lucknow East', waterLevel: 8.9, status: 'critical', trend: 'down', district: 'Lucknow', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR022', lat: 26.8205, lng: 80.9591, location: 'Lucknow West', waterLevel: 15.1, status: 'good', trend: 'up', district: 'Lucknow', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Bhopal Region
  { id: 'DWLR023', lat: 23.2599, lng: 77.4126, location: 'Bhopal Central', waterLevel: 12.4, status: 'moderate', trend: 'stable', district: 'Bhopal', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR024', lat: 23.2315, lng: 77.4462, location: 'Bhopal North', waterLevel: 17.8, status: 'good', trend: 'up', district: 'Bhopal', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR025', lat: 23.2884, lng: 77.3790, location: 'Bhopal South', waterLevel: 9.6, status: 'critical', trend: 'down', district: 'Bhopal', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Patna Region
  { id: 'DWLR026', lat: 25.5941, lng: 85.1376, location: 'Patna Central', waterLevel: 14.3, status: 'moderate', trend: 'up', district: 'Patna', state: 'Bihar', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR027', lat: 25.6093, lng: 85.1025, location: 'Patna North', waterLevel: 18.2, status: 'good', trend: 'up', district: 'Patna', state: 'Bihar', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR028', lat: 25.5789, lng: 85.1727, location: 'Patna South', waterLevel: 7.8, status: 'critical', trend: 'down', district: 'Patna', state: 'Bihar', timestamp: '2024-01-15T10:30:00Z' },
  
  // Chandigarh Region
  { id: 'DWLR029', lat: 30.7333, lng: 76.7794, location: 'Chandigarh Central', waterLevel: 13.6, status: 'moderate', trend: 'stable', district: 'Chandigarh', state: 'Chandigarh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR030', lat: 30.7515, lng: 76.7635, location: 'Chandigarh North', waterLevel: 16.9, status: 'good', trend: 'up', district: 'Chandigarh', state: 'Chandigarh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Bhubaneswar Region
  { id: 'DWLR031', lat: 20.2961, lng: 85.8245, location: 'Bhubaneswar Central', waterLevel: 10.4, status: 'moderate', trend: 'down', district: 'Khordha', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR032', lat: 20.3019, lng: 85.8098, location: 'Bhubaneswar North', waterLevel: 15.7, status: 'good', trend: 'up', district: 'Khordha', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR033', lat: 20.2903, lng: 85.8392, location: 'Bhubaneswar South', waterLevel: 8.1, status: 'critical', trend: 'down', district: 'Khordha', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  
  // Guwahati Region
  { id: 'DWLR034', lat: 26.1445, lng: 91.7362, location: 'Guwahati Central', waterLevel: 19.3, status: 'good', trend: 'up', district: 'Kamrup', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR035', lat: 26.1584, lng: 91.7539, location: 'Guwahati North', waterLevel: 12.8, status: 'moderate', trend: 'stable', district: 'Kamrup', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR036', lat: 26.1306, lng: 91.7185, location: 'Guwahati South', waterLevel: 17.4, status: 'good', trend: 'up', district: 'Kamrup', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  
  // Trivandrum Region
  { id: 'DWLR037', lat: 8.5241, lng: 76.9366, location: 'Trivandrum Central', waterLevel: 14.9, status: 'moderate', trend: 'stable', district: 'Thiruvananthapuram', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR038', lat: 8.5379, lng: 76.9245, location: 'Trivandrum North', waterLevel: 18.6, status: 'good', trend: 'up', district: 'Thiruvananthapuram', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR039', lat: 8.5103, lng: 76.9487, location: 'Trivandrum South', waterLevel: 11.2, status: 'moderate', trend: 'down', district: 'Thiruvananthapuram', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kochi Region
  { id: 'DWLR040', lat: 9.9312, lng: 76.2673, location: 'Kochi Central', waterLevel: 16.1, status: 'good', trend: 'up', district: 'Ernakulam', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR041', lat: 9.9516, lng: 76.2444, location: 'Kochi North', waterLevel: 13.5, status: 'moderate', trend: 'stable', district: 'Ernakulam', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR042', lat: 9.9108, lng: 76.2902, location: 'Kochi South', waterLevel: 9.7, status: 'critical', trend: 'down', district: 'Ernakulam', state: 'Kerala', timestamp: '2024-01-15T10:30:00Z' },
  
  // Coimbatore Region
  { id: 'DWLR043', lat: 11.0168, lng: 76.9558, location: 'Coimbatore Central', waterLevel: 8.4, status: 'critical', trend: 'down', district: 'Coimbatore', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR044', lat: 11.0376, lng: 76.9785, location: 'Coimbatore North', waterLevel: 14.7, status: 'moderate', trend: 'up', district: 'Coimbatore', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR045', lat: 10.9960, lng: 76.9331, location: 'Coimbatore South', waterLevel: 17.3, status: 'good', trend: 'up', district: 'Coimbatore', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  
  // Madurai Region
  { id: 'DWLR046', lat: 9.9252, lng: 78.1198, location: 'Madurai Central', waterLevel: 12.6, status: 'moderate', trend: 'stable', district: 'Madurai', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR047', lat: 9.9488, lng: 78.1037, location: 'Madurai North', waterLevel: 15.8, status: 'good', trend: 'up', district: 'Madurai', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR048', lat: 9.9016, lng: 78.1359, location: 'Madurai South', waterLevel: 7.2, status: 'critical', trend: 'down', district: 'Madurai', state: 'Tamil Nadu', timestamp: '2024-01-15T10:30:00Z' },
  
  // Vijayawada Region
  { id: 'DWLR049', lat: 16.5062, lng: 80.6480, location: 'Vijayawada Central', waterLevel: 11.9, status: 'moderate', trend: 'stable', district: 'Krishna', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR050', lat: 16.5298, lng: 80.6253, location: 'Vijayawada North', waterLevel: 18.1, status: 'good', trend: 'up', district: 'Krishna', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR051', lat: 16.4826, lng: 80.6707, location: 'Vijayawada South', waterLevel: 9.3, status: 'critical', trend: 'down', district: 'Krishna', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Visakhapatnam Region
  { id: 'DWLR052', lat: 17.6868, lng: 83.2185, location: 'Visakhapatnam Central', waterLevel: 14.2, status: 'moderate', trend: 'up', district: 'Visakhapatnam', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR053', lat: 17.7104, lng: 83.1958, location: 'Visakhapatnam North', waterLevel: 16.7, status: 'good', trend: 'up', district: 'Visakhapatnam', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR054', lat: 17.6632, lng: 83.2412, location: 'Visakhapatnam South', waterLevel: 8.6, status: 'critical', trend: 'down', district: 'Visakhapatnam', state: 'Andhra Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Mysore Region
  { id: 'DWLR055', lat: 12.2958, lng: 76.6394, location: 'Mysore Central', waterLevel: 13.4, status: 'moderate', trend: 'stable', district: 'Mysuru', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR056', lat: 12.3194, lng: 76.6167, location: 'Mysore North', waterLevel: 17.9, status: 'good', trend: 'up', district: 'Mysuru', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR057', lat: 12.2722, lng: 76.6621, location: 'Mysore South', waterLevel: 10.1, status: 'moderate', trend: 'down', district: 'Mysuru', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  
  // Hubli Region
  { id: 'DWLR058', lat: 15.3647, lng: 75.1240, location: 'Hubli Central', waterLevel: 9.8, status: 'critical', trend: 'down', district: 'Dharwad', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR059', lat: 15.3883, lng: 75.1013, location: 'Hubli North', waterLevel: 15.2, status: 'good', trend: 'up', district: 'Dharwad', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR060', lat: 15.3411, lng: 75.1467, location: 'Hubli South', waterLevel: 12.7, status: 'moderate', trend: 'stable', district: 'Dharwad', state: 'Karnataka', timestamp: '2024-01-15T10:30:00Z' },
  
  // Nashik Region
  { id: 'DWLR061', lat: 19.9975, lng: 73.7898, location: 'Nashik Central', waterLevel: 11.3, status: 'moderate', trend: 'stable', district: 'Nashik', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR062', lat: 20.0211, lng: 73.7671, location: 'Nashik North', waterLevel: 16.4, status: 'good', trend: 'up', district: 'Nashik', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR063', lat: 19.9739, lng: 73.8125, location: 'Nashik South', waterLevel: 8.9, status: 'critical', trend: 'down', district: 'Nashik', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  
  // Nagpur Region
  { id: 'DWLR064', lat: 21.1458, lng: 79.0882, location: 'Nagpur Central', waterLevel: 13.8, status: 'moderate', trend: 'up', district: 'Nagpur', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR065', lat: 21.1694, lng: 79.0655, location: 'Nagpur North', waterLevel: 17.6, status: 'good', trend: 'up', district: 'Nagpur', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR066', lat: 21.1222, lng: 79.1109, location: 'Nagpur South', waterLevel: 9.5, status: 'critical', trend: 'down', district: 'Nagpur', state: 'Maharashtra', timestamp: '2024-01-15T10:30:00Z' },
  
  // Surat Region
  { id: 'DWLR067', lat: 21.1702, lng: 72.8311, location: 'Surat Central', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'Surat', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR068', lat: 21.1938, lng: 72.8084, location: 'Surat North', waterLevel: 15.9, status: 'good', trend: 'up', district: 'Surat', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR069', lat: 21.1466, lng: 72.8538, location: 'Surat South', waterLevel: 7.3, status: 'critical', trend: 'down', district: 'Surat', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  
  // Vadodara Region
  { id: 'DWLR070', lat: 22.3072, lng: 73.1812, location: 'Vadodara Central', waterLevel: 14.6, status: 'moderate', trend: 'up', district: 'Vadodara', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR071', lat: 22.3308, lng: 73.1585, location: 'Vadodara North', waterLevel: 18.3, status: 'good', trend: 'up', district: 'Vadodara', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR072', lat: 22.2836, lng: 73.2039, location: 'Vadodara South', waterLevel: 10.7, status: 'moderate', trend: 'down', district: 'Vadodara', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  
  // Rajkot Region
  { id: 'DWLR073', lat: 22.3039, lng: 70.8022, location: 'Rajkot Central', waterLevel: 8.7, status: 'critical', trend: 'down', district: 'Rajkot', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR074', lat: 22.3275, lng: 70.7795, location: 'Rajkot North', waterLevel: 13.9, status: 'moderate', trend: 'stable', district: 'Rajkot', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR075', lat: 22.2803, lng: 70.8249, location: 'Rajkot South', waterLevel: 16.8, status: 'good', trend: 'up', district: 'Rajkot', state: 'Gujarat', timestamp: '2024-01-15T10:30:00Z' },
  
  // Indore Region
  { id: 'DWLR076', lat: 22.7196, lng: 75.8577, location: 'Indore Central', waterLevel: 11.5, status: 'moderate', trend: 'stable', district: 'Indore', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR077', lat: 22.7432, lng: 75.8350, location: 'Indore North', waterLevel: 15.4, status: 'good', trend: 'up', district: 'Indore', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR078', lat: 22.6960, lng: 75.8804, location: 'Indore South', waterLevel: 9.1, status: 'critical', trend: 'down', district: 'Indore', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jabalpur Region
  { id: 'DWLR079', lat: 23.1815, lng: 79.9864, location: 'Jabalpur Central', waterLevel: 13.2, status: 'moderate', trend: 'stable', district: 'Jabalpur', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR080', lat: 23.2051, lng: 79.9637, location: 'Jabalpur North', waterLevel: 17.1, status: 'good', trend: 'up', district: 'Jabalpur', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR081', lat: 23.1579, lng: 80.0091, location: 'Jabalpur South', waterLevel: 8.5, status: 'critical', trend: 'down', district: 'Jabalpur', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Gwalior Region
  { id: 'DWLR082', lat: 26.2183, lng: 78.1828, location: 'Gwalior Central', waterLevel: 10.8, status: 'moderate', trend: 'down', district: 'Gwalior', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR083', lat: 26.2419, lng: 78.1601, location: 'Gwalior North', waterLevel: 14.5, status: 'moderate', trend: 'up', district: 'Gwalior', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR084', lat: 26.1947, lng: 78.2055, location: 'Gwalior South', waterLevel: 16.2, status: 'good', trend: 'up', district: 'Gwalior', state: 'Madhya Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Agra Region
  { id: 'DWLR085', lat: 27.1767, lng: 78.0081, location: 'Agra Central', waterLevel: 9.4, status: 'critical', trend: 'down', district: 'Agra', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR086', lat: 27.2003, lng: 77.9854, location: 'Agra North', waterLevel: 12.7, status: 'moderate', trend: 'stable', district: 'Agra', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR087', lat: 27.1531, lng: 78.0308, location: 'Agra South', waterLevel: 15.6, status: 'good', trend: 'up', district: 'Agra', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kanpur Region
  { id: 'DWLR088', lat: 26.4499, lng: 80.3319, location: 'Kanpur Central', waterLevel: 11.1, status: 'moderate', trend: 'stable', district: 'Kanpur Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR089', lat: 26.4735, lng: 80.3092, location: 'Kanpur North', waterLevel: 8.2, status: 'critical', trend: 'down', district: 'Kanpur Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR090', lat: 26.4263, lng: 80.3546, location: 'Kanpur South', waterLevel: 17.4, status: 'good', trend: 'up', district: 'Kanpur Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Varanasi Region
  { id: 'DWLR091', lat: 25.3176, lng: 82.9739, location: 'Varanasi Central', waterLevel: 13.9, status: 'moderate', trend: 'up', district: 'Varanasi', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR092', lat: 25.3412, lng: 82.9512, location: 'Varanasi North', waterLevel: 16.3, status: 'good', trend: 'up', district: 'Varanasi', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR093', lat: 25.2940, lng: 82.9966, location: 'Varanasi South', waterLevel: 9.7, status: 'critical', trend: 'down', district: 'Varanasi', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Allahabad Region
  { id: 'DWLR094', lat: 25.4358, lng: 81.8463, location: 'Allahabad Central', waterLevel: 12.8, status: 'moderate', trend: 'stable', district: 'Prayagraj', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR095', lat: 25.4594, lng: 81.8236, location: 'Allahabad North', waterLevel: 18.5, status: 'good', trend: 'up', district: 'Prayagraj', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR096', lat: 25.4122, lng: 81.8690, location: 'Allahabad South', waterLevel: 7.6, status: 'critical', trend: 'down', district: 'Prayagraj', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Meerut Region
  { id: 'DWLR097', lat: 28.9845, lng: 77.7064, location: 'Meerut Central', waterLevel: 10.2, status: 'moderate', trend: 'down', district: 'Meerut', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR098', lat: 29.0081, lng: 77.6837, location: 'Meerut North', waterLevel: 14.1, status: 'moderate', trend: 'up', district: 'Meerut', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR099', lat: 28.9609, lng: 77.7291, location: 'Meerut South', waterLevel: 16.7, status: 'good', trend: 'up', district: 'Meerut', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Ghaziabad Region
  { id: 'DWLR100', lat: 28.6692, lng: 77.4538, location: 'Ghaziabad Central', waterLevel: 8.8, status: 'critical', trend: 'down', district: 'Ghaziabad', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR101', lat: 28.6928, lng: 77.4311, location: 'Ghaziabad North', waterLevel: 12.4, status: 'moderate', trend: 'stable', district: 'Ghaziabad', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR102', lat: 28.6456, lng: 77.4765, location: 'Ghaziabad South', waterLevel: 15.3, status: 'good', trend: 'up', district: 'Ghaziabad', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jodhpur Region
  { id: 'DWLR103', lat: 26.2389, lng: 73.0243, location: 'Jodhpur Central', waterLevel: 6.9, status: 'critical', trend: 'down', district: 'Jodhpur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR104', lat: 26.2625, lng: 73.0016, location: 'Jodhpur North', waterLevel: 11.6, status: 'moderate', trend: 'stable', district: 'Jodhpur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR105', lat: 26.2153, lng: 73.0470, location: 'Jodhpur South', waterLevel: 14.8, status: 'moderate', trend: 'up', district: 'Jodhpur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kota Region
  { id: 'DWLR106', lat: 25.2138, lng: 75.8648, location: 'Kota Central', waterLevel: 9.3, status: 'critical', trend: 'down', district: 'Kota', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR107', lat: 25.2374, lng: 75.8421, location: 'Kota North', waterLevel: 13.7, status: 'moderate', trend: 'up', district: 'Kota', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR108', lat: 25.1902, lng: 75.8875, location: 'Kota South', waterLevel: 17.2, status: 'good', trend: 'up', district: 'Kota', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Udaipur Region
  { id: 'DWLR109', lat: 24.5854, lng: 73.7125, location: 'Udaipur Central', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'Udaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR110', lat: 24.6090, lng: 73.6898, location: 'Udaipur North', waterLevel: 15.9, status: 'good', trend: 'up', district: 'Udaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR111', lat: 24.5618, lng: 73.7352, location: 'Udaipur South', waterLevel: 8.4, status: 'critical', trend: 'down', district: 'Udaipur', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Ajmer Region
  { id: 'DWLR112', lat: 26.4499, lng: 74.6399, location: 'Ajmer Central', waterLevel: 10.7, status: 'moderate', trend: 'down', district: 'Ajmer', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR113', lat: 26.4735, lng: 74.6172, location: 'Ajmer North', waterLevel: 14.3, status: 'moderate', trend: 'up', district: 'Ajmer', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR114', lat: 26.4263, lng: 74.6626, location: 'Ajmer South', waterLevel: 16.5, status: 'good', trend: 'up', district: 'Ajmer', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Bikaner Region
  { id: 'DWLR115', lat: 28.0229, lng: 73.3119, location: 'Bikaner Central', waterLevel: 7.1, status: 'critical', trend: 'down', district: 'Bikaner', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR116', lat: 28.0465, lng: 73.2892, location: 'Bikaner North', waterLevel: 11.8, status: 'moderate', trend: 'stable', district: 'Bikaner', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR117', lat: 27.9993, lng: 73.3346, location: 'Bikaner South', waterLevel: 13.4, status: 'moderate', trend: 'up', district: 'Bikaner', state: 'Rajasthan', timestamp: '2024-01-15T10:30:00Z' },
  
  // Ranchi Region
  { id: 'DWLR118', lat: 23.3441, lng: 85.3096, location: 'Ranchi Central', waterLevel: 15.2, status: 'good', trend: 'up', district: 'Ranchi', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR119', lat: 23.3677, lng: 85.2869, location: 'Ranchi North', waterLevel: 12.6, status: 'moderate', trend: 'stable', district: 'Ranchi', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR120', lat: 23.3205, lng: 85.3323, location: 'Ranchi South', waterLevel: 18.1, status: 'good', trend: 'up', district: 'Ranchi', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jamshedpur Region
  { id: 'DWLR121', lat: 22.8046, lng: 86.2029, location: 'Jamshedpur Central', waterLevel: 14.7, status: 'moderate', trend: 'up', district: 'East Singhbhum', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR122', lat: 22.8282, lng: 86.1802, location: 'Jamshedpur North', waterLevel: 17.3, status: 'good', trend: 'up', district: 'East Singhbhum', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR123', lat: 22.7810, lng: 86.2256, location: 'Jamshedpur South', waterLevel: 9.8, status: 'critical', trend: 'down', district: 'East Singhbhum', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  
  // Dhanbad Region
  { id: 'DWLR124', lat: 23.7957, lng: 86.4304, location: 'Dhanbad Central', waterLevel: 11.4, status: 'moderate', trend: 'stable', district: 'Dhanbad', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR125', lat: 23.8193, lng: 86.4077, location: 'Dhanbad North', waterLevel: 8.9, status: 'critical', trend: 'down', district: 'Dhanbad', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR126', lat: 23.7721, lng: 86.4531, location: 'Dhanbad South', waterLevel: 15.6, status: 'good', trend: 'up', district: 'Dhanbad', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  
  // Bokaro Region
  { id: 'DWLR127', lat: 23.6693, lng: 86.1511, location: 'Bokaro Central', waterLevel: 13.1, status: 'moderate', trend: 'stable', district: 'Bokaro', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR128', lat: 23.6929, lng: 86.1284, location: 'Bokaro North', waterLevel: 16.8, status: 'good', trend: 'up', district: 'Bokaro', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR129', lat: 23.6457, lng: 86.1738, location: 'Bokaro South', waterLevel: 10.3, status: 'moderate', trend: 'down', district: 'Bokaro', state: 'Jharkhand', timestamp: '2024-01-15T10:30:00Z' },
  
  // Durgapur Region
  { id: 'DWLR130', lat: 23.5204, lng: 87.3119, location: 'Durgapur Central', waterLevel: 12.9, status: 'moderate', trend: 'stable', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR131', lat: 23.5440, lng: 87.2892, location: 'Durgapur North', waterLevel: 17.4, status: 'good', trend: 'up', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR132', lat: 23.4968, lng: 87.3346, location: 'Durgapur South', waterLevel: 9.1, status: 'critical', trend: 'down', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  
  // Asansol Region
  { id: 'DWLR133', lat: 23.6739, lng: 86.9524, location: 'Asansol Central', waterLevel: 11.7, status: 'moderate', trend: 'stable', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR134', lat: 23.6975, lng: 86.9297, location: 'Asansol North', waterLevel: 14.2, status: 'moderate', trend: 'up', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR135', lat: 23.6503, lng: 86.9751, location: 'Asansol South', waterLevel: 8.6, status: 'critical', trend: 'down', district: 'Paschim Bardhaman', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  
  // Siliguri Region
  { id: 'DWLR136', lat: 26.7271, lng: 88.3953, location: 'Siliguri Central', waterLevel: 16.3, status: 'good', trend: 'up', district: 'Darjeeling', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR137', lat: 26.7507, lng: 88.3726, location: 'Siliguri North', waterLevel: 19.1, status: 'good', trend: 'up', district: 'Darjeeling', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR138', lat: 26.7035, lng: 88.4180, location: 'Siliguri South', waterLevel: 13.8, status: 'moderate', trend: 'stable', district: 'Darjeeling', state: 'West Bengal', timestamp: '2024-01-15T10:30:00Z' },
  
  // Cuttack Region
  { id: 'DWLR139', lat: 20.4625, lng: 85.8828, location: 'Cuttack Central', waterLevel: 12.5, status: 'moderate', trend: 'stable', district: 'Cuttack', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR140', lat: 20.4861, lng: 85.8601, location: 'Cuttack North', waterLevel: 15.7, status: 'good', trend: 'up', district: 'Cuttack', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR141', lat: 20.4389, lng: 85.9055, location: 'Cuttack South', waterLevel: 9.4, status: 'critical', trend: 'down', district: 'Cuttack', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  
  // Berhampur Region
  { id: 'DWLR142', lat: 19.3149, lng: 84.7941, location: 'Berhampur Central', waterLevel: 11.2, status: 'moderate', trend: 'stable', district: 'Ganjam', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR143', lat: 19.3385, lng: 84.7714, location: 'Berhampur North', waterLevel: 14.9, status: 'moderate', trend: 'up', district: 'Ganjam', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR144', lat: 19.2913, lng: 84.8168, location: 'Berhampur South', waterLevel: 8.1, status: 'critical', trend: 'down', district: 'Ganjam', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  
  // Rourkela Region
  { id: 'DWLR145', lat: 22.2604, lng: 84.8536, location: 'Rourkela Central', waterLevel: 16.4, status: 'good', trend: 'up', district: 'Sundargarh', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR146', lat: 22.2840, lng: 84.8309, location: 'Rourkela North', waterLevel: 18.7, status: 'good', trend: 'up', district: 'Sundargarh', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR147', lat: 22.2368, lng: 84.8763, location: 'Rourkela South', waterLevel: 13.6, status: 'moderate', trend: 'stable', district: 'Sundargarh', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  
  // Sambalpur Region
  { id: 'DWLR148', lat: 21.4669, lng: 83.9812, location: 'Sambalpur Central', waterLevel: 10.8, status: 'moderate', trend: 'down', district: 'Sambalpur', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR149', lat: 21.4905, lng: 83.9585, location: 'Sambalpur North', waterLevel: 15.1, status: 'good', trend: 'up', district: 'Sambalpur', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR150', lat: 21.4433, lng: 84.0039, location: 'Sambalpur South', waterLevel: 7.3, status: 'critical', trend: 'down', district: 'Sambalpur', state: 'Odisha', timestamp: '2024-01-15T10:30:00Z' },
  
  // Dibrugarh Region
  { id: 'DWLR151', lat: 27.4728, lng: 94.9120, location: 'Dibrugarh Central', waterLevel: 17.9, status: 'good', trend: 'up', district: 'Dibrugarh', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR152', lat: 27.4964, lng: 94.8893, location: 'Dibrugarh North', waterLevel: 20.3, status: 'good', trend: 'up', district: 'Dibrugarh', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR153', lat: 27.4492, lng: 94.9347, location: 'Dibrugarh South', waterLevel: 14.6, status: 'moderate', trend: 'stable', district: 'Dibrugarh', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jorhat Region
  { id: 'DWLR154', lat: 26.7509, lng: 94.2037, location: 'Jorhat Central', waterLevel: 16.2, status: 'good', trend: 'up', district: 'Jorhat', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR155', lat: 26.7745, lng: 94.1810, location: 'Jorhat North', waterLevel: 18.5, status: 'good', trend: 'up', district: 'Jorhat', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR156', lat: 26.7273, lng: 94.2264, location: 'Jorhat South', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'Jorhat', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  
  // Silchar Region
  { id: 'DWLR157', lat: 24.8333, lng: 92.7789, location: 'Silchar Central', waterLevel: 15.4, status: 'good', trend: 'up', district: 'Cachar', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR158', lat: 24.8569, lng: 92.7562, location: 'Silchar North', waterLevel: 13.8, status: 'moderate', trend: 'stable', district: 'Cachar', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR159', lat: 24.8097, lng: 92.8016, location: 'Silchar South', waterLevel: 17.1, status: 'good', trend: 'up', district: 'Cachar', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  
  // Tezpur Region
  { id: 'DWLR160', lat: 26.6335, lng: 92.7935, location: 'Tezpur Central', waterLevel: 14.7, status: 'moderate', trend: 'up', district: 'Sonitpur', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR161', lat: 26.6571, lng: 92.7708, location: 'Tezpur North', waterLevel: 16.9, status: 'good', trend: 'up', district: 'Sonitpur', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR162', lat: 26.6099, lng: 92.8162, location: 'Tezpur South', waterLevel: 11.3, status: 'moderate', trend: 'down', district: 'Sonitpur', state: 'Assam', timestamp: '2024-01-15T10:30:00Z' },
  
  // Imphal Region
  { id: 'DWLR163', lat: 24.8170, lng: 93.9368, location: 'Imphal Central', waterLevel: 13.2, status: 'moderate', trend: 'stable', district: 'Imphal West', state: 'Manipur', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR164', lat: 24.8406, lng: 93.9141, location: 'Imphal North', waterLevel: 15.8, status: 'good', trend: 'up', district: 'Imphal West', state: 'Manipur', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR165', lat: 24.7934, lng: 93.9595, location: 'Imphal South', waterLevel: 9.6, status: 'critical', trend: 'down', district: 'Imphal West', state: 'Manipur', timestamp: '2024-01-15T10:30:00Z' },
  
  // Aizawl Region
  { id: 'DWLR166', lat: 23.7271, lng: 92.7176, location: 'Aizawl Central', waterLevel: 16.5, status: 'good', trend: 'up', district: 'Aizawl', state: 'Mizoram', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR167', lat: 23.7507, lng: 92.6949, location: 'Aizawl North', waterLevel: 18.2, status: 'good', trend: 'up', district: 'Aizawl', state: 'Mizoram', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR168', lat: 23.7035, lng: 92.7403, location: 'Aizawl South', waterLevel: 14.1, status: 'moderate', trend: 'stable', district: 'Aizawl', state: 'Mizoram', timestamp: '2024-01-15T10:30:00Z' },
  
  // Shillong Region
  { id: 'DWLR169', lat: 25.5788, lng: 91.8933, location: 'Shillong Central', waterLevel: 17.3, status: 'good', trend: 'up', district: 'East Khasi Hills', state: 'Meghalaya', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR170', lat: 25.6024, lng: 91.8706, location: 'Shillong North', waterLevel: 19.7, status: 'good', trend: 'up', district: 'East Khasi Hills', state: 'Meghalaya', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR171', lat: 25.5552, lng: 91.9160, location: 'Shillong South', waterLevel: 15.9, status: 'good', trend: 'stable', district: 'East Khasi Hills', state: 'Meghalaya', timestamp: '2024-01-15T10:30:00Z' },
  
  // Agartala Region
  { id: 'DWLR172', lat: 23.8315, lng: 91.2868, location: 'Agartala Central', waterLevel: 14.4, status: 'moderate', trend: 'up', district: 'West Tripura', state: 'Tripura', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR173', lat: 23.8551, lng: 91.2641, location: 'Agartala North', waterLevel: 16.8, status: 'good', trend: 'up', district: 'West Tripura', state: 'Tripura', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR174', lat: 23.8079, lng: 91.3095, location: 'Agartala South', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'West Tripura', state: 'Tripura', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kohima Region
  { id: 'DWLR175', lat: 25.6751, lng: 94.1086, location: 'Kohima Central', waterLevel: 18.9, status: 'good', trend: 'up', district: 'Kohima', state: 'Nagaland', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR176', lat: 25.6987, lng: 94.0859, location: 'Kohima North', waterLevel: 21.4, status: 'good', trend: 'up', district: 'Kohima', state: 'Nagaland', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR177', lat: 25.6515, lng: 94.1313, location: 'Kohima South', waterLevel: 16.7, status: 'good', trend: 'stable', district: 'Kohima', state: 'Nagaland', timestamp: '2024-01-15T10:30:00Z' },
  
  // Itanagar Region
  { id: 'DWLR178', lat: 27.0844, lng: 93.6053, location: 'Itanagar Central', waterLevel: 20.1, status: 'good', trend: 'up', district: 'Papum Pare', state: 'Arunachal Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR179', lat: 27.1080, lng: 93.5826, location: 'Itanagar North', waterLevel: 22.6, status: 'good', trend: 'up', district: 'Papum Pare', state: 'Arunachal Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR180', lat: 27.0608, lng: 93.6280, location: 'Itanagar South', waterLevel: 18.3, status: 'good', trend: 'stable', district: 'Papum Pare', state: 'Arunachal Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Gangtok Region
  { id: 'DWLR181', lat: 27.3389, lng: 88.6065, location: 'Gangtok Central', waterLevel: 19.4, status: 'good', trend: 'up', district: 'East Sikkim', state: 'Sikkim', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR182', lat: 27.3625, lng: 88.5838, location: 'Gangtok North', waterLevel: 21.8, status: 'good', trend: 'up', district: 'East Sikkim', state: 'Sikkim', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR183', lat: 27.3153, lng: 88.6292, location: 'Gangtok South', waterLevel: 17.2, status: 'good', trend: 'stable', district: 'East Sikkim', state: 'Sikkim', timestamp: '2024-01-15T10:30:00Z' },
  
  // Port Blair Region
  { id: 'DWLR184', lat: 11.6234, lng: 92.7265, location: 'Port Blair Central', waterLevel: 15.6, status: 'good', trend: 'up', district: 'South Andaman', state: 'Andaman and Nicobar Islands', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR185', lat: 11.6470, lng: 92.7038, location: 'Port Blair North', waterLevel: 17.9, status: 'good', trend: 'up', district: 'South Andaman', state: 'Andaman and Nicobar Islands', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR186', lat: 11.5998, lng: 92.7492, location: 'Port Blair South', waterLevel: 13.4, status: 'moderate', trend: 'stable', district: 'South Andaman', state: 'Andaman and Nicobar Islands', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kavaratti Region
  { id: 'DWLR187', lat: 10.5669, lng: 72.6420, location: 'Kavaratti Central', waterLevel: 12.8, status: 'moderate', trend: 'stable', district: 'Lakshadweep', state: 'Lakshadweep', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR188', lat: 10.5905, lng: 72.6193, location: 'Kavaratti North', waterLevel: 15.3, status: 'good', trend: 'up', district: 'Lakshadweep', state: 'Lakshadweep', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR189', lat: 10.5433, lng: 72.6647, location: 'Kavaratti South', waterLevel: 11.1, status: 'moderate', trend: 'down', district: 'Lakshadweep', state: 'Lakshadweep', timestamp: '2024-01-15T10:30:00Z' },
  
  // Puducherry Region
  { id: 'DWLR190', lat: 11.9416, lng: 79.8083, location: 'Puducherry Central', waterLevel: 10.9, status: 'moderate', trend: 'stable', district: 'Puducherry', state: 'Puducherry', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR191', lat: 11.9652, lng: 79.7856, location: 'Puducherry North', waterLevel: 14.2, status: 'moderate', trend: 'up', district: 'Puducherry', state: 'Puducherry', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR192', lat: 11.9180, lng: 79.8310, location: 'Puducherry South', waterLevel: 8.7, status: 'critical', trend: 'down', district: 'Puducherry', state: 'Puducherry', timestamp: '2024-01-15T10:30:00Z' },
  
  // Daman Region
  { id: 'DWLR193', lat: 20.3974, lng: 72.8328, location: 'Daman Central', waterLevel: 11.5, status: 'moderate', trend: 'stable', district: 'Daman', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR194', lat: 20.4210, lng: 72.8101, location: 'Daman North', waterLevel: 13.8, status: 'moderate', trend: 'up', district: 'Daman', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR195', lat: 20.3738, lng: 72.8555, location: 'Daman South', waterLevel: 9.2, status: 'critical', trend: 'down', district: 'Daman', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  
  // Silvassa Region
  { id: 'DWLR196', lat: 20.2738, lng: 73.0169, location: 'Silvassa Central', waterLevel: 12.4, status: 'moderate', trend: 'stable', district: 'Dadra and Nagar Haveli', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR197', lat: 20.2974, lng: 72.9942, location: 'Silvassa North', waterLevel: 15.7, status: 'good', trend: 'up', district: 'Dadra and Nagar Haveli', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR198', lat: 20.2502, lng: 73.0396, location: 'Silvassa South', waterLevel: 10.1, status: 'moderate', trend: 'down', district: 'Dadra and Nagar Haveli', state: 'Dadra and Nagar Haveli and Daman and Diu', timestamp: '2024-01-15T10:30:00Z' },
  
  // Leh Region
  { id: 'DWLR199', lat: 34.1526, lng: 77.5771, location: 'Leh Central', waterLevel: 8.3, status: 'critical', trend: 'down', district: 'Leh', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR200', lat: 34.1762, lng: 77.5544, location: 'Leh North', waterLevel: 11.9, status: 'moderate', trend: 'stable', district: 'Leh', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR201', lat: 34.1290, lng: 77.5998, location: 'Leh South', waterLevel: 14.6, status: 'moderate', trend: 'up', district: 'Leh', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Kargil Region
  { id: 'DWLR202', lat: 34.5539, lng: 76.1052, location: 'Kargil Central', waterLevel: 9.7, status: 'critical', trend: 'down', district: 'Kargil', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR203', lat: 34.5775, lng: 76.0825, location: 'Kargil North', waterLevel: 13.2, status: 'moderate', trend: 'stable', district: 'Kargil', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR204', lat: 34.5303, lng: 76.1279, location: 'Kargil South', waterLevel: 16.1, status: 'good', trend: 'up', district: 'Kargil', state: 'Ladakh', timestamp: '2024-01-15T10:30:00Z' },
  
  // Srinagar Region
  { id: 'DWLR205', lat: 34.0837, lng: 74.7973, location: 'Srinagar Central', waterLevel: 12.6, status: 'moderate', trend: 'stable', district: 'Srinagar', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR206', lat: 34.1073, lng: 74.7746, location: 'Srinagar North', waterLevel: 15.8, status: 'good', trend: 'up', district: 'Srinagar', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR207', lat: 34.0601, lng: 74.8200, location: 'Srinagar South', waterLevel: 10.4, status: 'moderate', trend: 'down', district: 'Srinagar', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  
  // Jammu Region
  { id: 'DWLR208', lat: 32.7266, lng: 74.8570, location: 'Jammu Central', waterLevel: 11.3, status: 'moderate', trend: 'stable', district: 'Jammu', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR209', lat: 32.7502, lng: 74.8343, location: 'Jammu North', waterLevel: 14.7, status: 'moderate', trend: 'up', district: 'Jammu', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR210', lat: 32.7030, lng: 74.8797, location: 'Jammu South', waterLevel: 8.9, status: 'critical', trend: 'down', district: 'Jammu', state: 'Jammu and Kashmir', timestamp: '2024-01-15T10:30:00Z' },
  
  // Additional Delhi NCR Stations
  { id: 'DWLR211', lat: 28.4595, lng: 77.0266, location: 'Gurgaon Central', waterLevel: 7.8, status: 'critical', trend: 'down', district: 'Gurgaon', state: 'Haryana', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR212', lat: 28.4831, lng: 77.0039, location: 'Gurgaon North', waterLevel: 12.1, status: 'moderate', trend: 'stable', district: 'Gurgaon', state: 'Haryana', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR213', lat: 28.4359, lng: 77.0493, location: 'Gurgaon South', waterLevel: 15.4, status: 'good', trend: 'up', district: 'Gurgaon', state: 'Haryana', timestamp: '2024-01-15T10:30:00Z' },
  
  { id: 'DWLR214', lat: 28.5355, lng: 77.3910, location: 'Noida Central', waterLevel: 9.6, status: 'critical', trend: 'down', district: 'Gautam Buddha Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR215', lat: 28.5591, lng: 77.3683, location: 'Noida North', waterLevel: 13.9, status: 'moderate', trend: 'up', district: 'Gautam Buddha Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
  { id: 'DWLR216', lat: 28.5119, lng: 77.4137, location: 'Noida South', waterLevel: 16.7, status: 'good', trend: 'up', district: 'Gautam Buddha Nagar', state: 'Uttar Pradesh', timestamp: '2024-01-15T10:30:00Z' },
];

// Generate additional stations to simulate 5,260 total
export const generateMockStations = (count: number = 5260): DWLRStation[] => {
  const baseStations = [...mockStations];
  const additionalStations: DWLRStation[] = [];
  
  for (let i = baseStations.length; i < count; i++) {
    const baseStation = baseStations[i % baseStations.length];
    const waterLevel = Math.random() * 25; // 0-25 meters
    let status: 'good' | 'moderate' | 'critical';
    
    if (waterLevel > 15) status = 'good';
    else if (waterLevel > 10) status = 'moderate';
    else status = 'critical';
    
    const trends: ('up' | 'down' | 'stable')[] = ['up', 'down', 'stable'];
    const trend = trends[Math.floor(Math.random() * trends.length)];
    
    additionalStations.push({
      ...baseStation,
      id: `DWLR${String(i + 1).padStart(3, '0')}`,
      lat: baseStation.lat + (Math.random() - 0.5) * 2, // Add some random variance
      lng: baseStation.lng + (Math.random() - 0.5) * 2,
      location: `${baseStation.location} ${Math.floor(Math.random() * 100)}`,
      waterLevel: parseFloat(waterLevel.toFixed(1)),
      status,
      trend,
      timestamp: new Date().toISOString(),
    });
  }
  
  return [...baseStations, ...additionalStations];
};

export const allStations = generateMockStations();

// Time series data for charts
export const timeSeriesData: TimeSeriesData[] = [
  { month: 'Jul', level: 12.5, station: 'DWLR001' },
  { month: 'Aug', level: 11.8, station: 'DWLR001' },
  { month: 'Sep', level: 13.2, station: 'DWLR001' },
  { month: 'Oct', level: 14.1, station: 'DWLR001' },
  { month: 'Nov', level: 14.8, station: 'DWLR001' },
  { month: 'Dec', level: 15.2, station: 'DWLR001' },
];

// State-wise data for bar charts
export const stateWiseData = [
  { state: 'Maharashtra', level: 14.2, stations: 856 },
  { state: 'Gujarat', level: 11.8, stations: 672 },
  { state: 'Karnataka', level: 10.5, stations: 543 },
  { state: 'Tamil Nadu', level: 13.7, stations: 489 },
  { state: 'Telangana', level: 12.3, stations: 398 },
  { state: 'West Bengal', level: 15.1, stations: 367 },
  { state: 'Delhi', level: 11.8, stations: 89 }
];

// Community activities data
export const communityActivities: ActivityData[] = [
  {
    id: 'ACT001',
    title: 'Rainwater Harvesting Installation',
    description: 'Install rooftop rainwater harvesting system in residential areas',
    credits: 500,
    difficulty: 'Medium',
    impact: 'High',
    icon: 'droplets'
  },
  {
    id: 'ACT002',
    title: 'Community Well Recharge',
    description: 'Implement groundwater recharge through existing community wells',
    credits: 1000,
    difficulty: 'High',
    impact: 'High',
    icon: 'waves'
  },
  {
    id: 'ACT003',
    title: 'Percolation Tank Construction',
    description: 'Build percolation tanks to enhance groundwater recharge',
    credits: 750,
    difficulty: 'High',
    impact: 'High',
    icon: 'container'
  },
  {
    id: 'ACT004',
    title: 'Tree Plantation Drive',
    description: 'Organize tree plantation to improve groundwater retention',
    credits: 300,
    difficulty: 'Low',
    impact: 'Medium',
    icon: 'tree-pine'
  }
];

// Calculate statistics
export const getStatistics = () => {
  const onlineStations = allStations.length;
  const criticalZones = allStations.filter(s => s.status === 'critical').length;
  const averageWaterLevel = parseFloat((allStations.reduce((sum, s) => sum + s.waterLevel, 0) / allStations.length).toFixed(1));
  const statesMonitored = [...new Set(allStations.map(s => s.state))].length;
  
  return {
    onlineStations,
    criticalZones,
    averageWaterLevel,
    statesMonitored
  };
};