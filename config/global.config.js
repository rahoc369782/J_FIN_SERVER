import dotenv from "dotenv";
dotenv.config();
export const CONFIG = {
  TRANSACTION_FILE_PATH: process.env.J_FINANCE_LEDGER_PATH,,
  USER: "cretoprof@gmail.com",
  APP_PASSWORD: "bondutvwjwvhruvu",
  GIT_CREDS: {
    access_token: process.env.J_FINANCE_ACCESSTOKEN,
    base_url: "https://api.github.com",
    owner: "rahoc369782",
    repo: "J_FINANCE_CONNECTOR",
    j_finance_input_file: "J-INPUT-FILE",
    j_finance_output_file: "J-OUTPUT-FILE",
    j_finance_input_file_path_generator: function () {
      return `repos/${this.owner}/${this.repo}/contents/${this.j_finance_input_file}`;
    },
    j_finance_output_file_path_generator: function () {
      return `repos/${this.owner}/${this.repo}/contents/${this.j_finance_output_file}`;
    },
  },
};
