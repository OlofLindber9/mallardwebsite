import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Map to store IPs with their last visit timestamp
let visitors = new Map<string, number>();

// Function to clean old visitor data
function cleanOldVisitors() {
  const currentTime = Date.now();
  const twentyFourHoursAgo = currentTime - 24 * 60 * 60 * 1000;
  visitors.forEach((timestamp, ip) => {
    if (timestamp < twentyFourHoursAgo) {
      visitors.delete(ip);
    }
  });
}

export function middleware(request: NextRequest) {
  // Only track visits to the homepage
  if (request.nextUrl.pathname === '/') {
    const userIP = request.ip || 'unknown';
    const currentTime = Date.now();

    // Add or update visitor timestamp
    visitors.set(userIP, currentTime);

    // Clean up old visitors
    cleanOldVisitors();

    // Log the unique visitor count
    console.log(`[${new Date().toISOString()}] Unique visitors in the last 24 hours: ${visitors.size}`);
  }

  return NextResponse.next();
}

// Configure the middleware to only run on the homepage
export const config = {
  matcher: '/',
}