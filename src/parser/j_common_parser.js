function c_j_parser({ buffer }) {
  try {
    // Parse the JSON portion of the buffer
    const parsedData = JSON.parse(buffer);
    return { success: true, data: { ...parsedData } };
  } catch (err) {
    console.error("JSON parsing error:", err.message);
    return { success: false, error: err.message };
  }
}

// Maupulators
function c_j_hdr_modifier(obj, batch_size, last_processed_timestamp) {
  if (batch_size <= 0) {
    return obj;
  }
  obj["total_transactions"] = obj["total_transactions"] + batch_size;
  obj["successfully_processed_transactions"] =
    obj["successfully_processed_transactions"] + batch_size;
  obj["transaction_in_batch"] = batch_size;
  obj["last_processed_timestamp"] = last_processed_timestamp;
  return obj;
}

export { c_j_parser, c_j_hdr_modifier };
