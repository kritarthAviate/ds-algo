function removeX(str) {
  if (str.length == 0) {
    return str;
  }
  if (str[0] == "x") {
    return removeX(str.slice(1));
  }

  return str[0] + removeX(str.slice(1));
}

console.log(removeX("xacbxcxdxe"));
