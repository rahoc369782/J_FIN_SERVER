import { execSync } from "child_process";
import { CONFIG } from "../../config/global.config.js";

// Function to execute Ledger command synchronously
export function generateLedgerReportSync() {
  const ledgerCommand = `ledger -f /Users/jeren/j-projects/J_FINANCE_SERVER/test.txt balance assets liabilities --depth 2`;

  try {
    const report = execSync(ledgerCommand); // Synchronously execute the command
    const reportString = report.toString(); // Convert the buffer to string
    console.log("Raw Report:", reportString); // Log raw output
    return { success: true, report };
  } catch (error) {
    console.error("Error executing Ledger command:", error);
    return { success: false };
  }
}
