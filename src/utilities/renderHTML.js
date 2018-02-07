const renderHTML = html => {
  if (!html) return;
  return { __html: html };
};

export default renderHTML;
