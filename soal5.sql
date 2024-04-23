SELECT members.memid id, concat(members.firstname, ' ', members.surname) fullname, count(bookings) count_bookings from cd.members members
INNER JOIN cd.bookings bookings
  ON members.memid = bookings.memid
INNER JOIN cd.facilities facilities
  ON bookings.facid = facilities.facid
GROUP BY members.memid
ORDER BY members.memid ASC
