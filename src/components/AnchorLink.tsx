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
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-accent/10"
    >
      {children}
    </a>
  );
};

export default AnchorLink;
