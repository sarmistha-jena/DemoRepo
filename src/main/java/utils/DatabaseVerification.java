package utils;

import java.io.IOException;
import java.sql.*;

public class DatabaseVerification {

    private Connection con = null;
    private Statement stmt = null;
    private ResultSet rs = null;


    public Statement connectToDatabase() throws SQLException, ClassNotFoundException, IOException {

        Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        // Prepare connection url.
        String url = "jdbc:sqlserver://192.168.1.5:1433;DatabaseName=UserInfo";
        // Get connection to DB.
        con = DriverManager.getConnection(url, ReadConfigFile.getPropertyFromConfig("dbusername"), ReadConfigFile.getPropertyFromConfig("dbpassword"));
        // Create statement object which would be used in writing DDL and DML
        // SQL statement.
        stmt = con.createStatement();
        return stmt;
    }

    public boolean verifyAccountDetails(String extId, String name, String accTypeCode, String parExtId,
                                        String fullName, String phone, String email,
                                        String addr1, String addr2, String zip, String city) throws SQLException {

        try {

            // This will load the driver
            Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
            Log.info("Driver Loaded");

            con = DriverManager.getConnection("jdbc:odbc:Test_Oracle", ReadConfigFile.getPropertyFromConfig("dbusername"), ReadConfigFile.getPropertyFromConfig("dbpassword"));

            Log.info("Connection created");

            // This will create statement
            stmt = con.createStatement();

            Log.info("Statement created");

            // Now execute the query, here facebook is the table which I have created in DB

            rs = stmt.executeQuery("Select * from Facebook");

            Log.info("Query Executed");

            // Iterate the resultset now

            while (rs.next()) {

                /*String uname=    rs.getString("username");
                String pass=    rs.getString("password");
                String email=    rs.getString("email");

                System.err.println("uname is "+uname+" password is "+pass+" email id is "+email);
*/
            }
        } catch (Exception e) {
            Log.error(e.getMessage());
        } finally {
            if (con != null) {
                con.close();
            }
        }
        return false;

    }

    public boolean verifyAccountDeleted(String extId) {

        try {

            Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
            Log.info("Driver Loaded");

            con = DriverManager.getConnection("jdbc:odbc:Test_Oracle", ReadConfigFile.getPropertyFromConfig("dbusername"), ReadConfigFile.getPropertyFromConfig("dbpassword"));

            Log.info("Connection created");

            PreparedStatement pstmt = con.prepareStatement("Select * from accout where externalId=?");
            pstmt.setString(1, extId);

            Log.info("Statement created");

            rs = pstmt.executeQuery();

            Log.info("Query Executed");

            if (rs.getRow() == 0) {
                return true;
            }
        } catch (Exception e) {
            Log.error(e.getMessage());
        } finally {
            if (con != null) {
                try {
                    con.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return false;

    }
}
