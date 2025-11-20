interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
}

const AnchorLink = ({ href, children }: AnchorLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-sm font-bold text-foreground hover:text-primary transition-all px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary shadow-sm hover:shadow-md"
    >
      {children}
    </a>
  );
};

export default AnchorLink;
