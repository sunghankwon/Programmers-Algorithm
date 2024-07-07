function solution(phone_number) {
  const lastNum = phone_number.slice(-4)
  const star = "*".repeat(phone_number.length - 4);
  
  return star + lastNum;
}
