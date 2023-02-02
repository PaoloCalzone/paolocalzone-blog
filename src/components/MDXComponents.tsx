const MDXComponents = {
  h1: (props: Object) => (
    <h1
      className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
      {...props}
    />
  ),
  h2: (props: Object) => (
    <h2
      className="text-3xl font-boldtracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl"
      {...props}
    />
  ),
  h3: (props: Object) => (
    <h3
      className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
      {...props}
    />
  ),
  h4: (props: Object) => (
    <h4
      className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl"
      {...props}
    />
  ),
  h5: (props: Object) => (
    <h5
      className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl"
      {...props}
    />
  ),
  h6: (props: Object) => (
    <h6
      className="text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-lg"
      {...props}
    />
  ),
  p: (props: Object) => (
    <p className="text-base text-zinc-600 dark:text-zinc-400" {...props} />
  ),
  a: (props: Object) => <a className="text-blue-500" {...props} />,
  ul: (props: Object) => <ul className="list-disc pl-5" {...props} />,
  ol: (props: Object) => <ol className="list-decimal pl-5" {...props} />,
  li: (props: Object) => <li className="my-2" {...props} />,
  blockquote: (props: Object) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic text-gray-600"
      {...props}
    />
  ),
  inlineCode: (props: Object) => (
    <code className="bg-gray-100 rounded px-1" {...props} />
  ),
  /*  pre: (props: Object) => (
    <pre className="bg-gray-100 rounded px-1" {...props} />
  ), */
  /*   code: (props: Object) => (
    <code className="bg-gray-100 rounded px-1" {...props} />
  ), */
  table: (props: Object) => <table className="table-auto" {...props} />,
  th: (props: Object) => <th className="px-4 py-2" {...props} />,
  td: (props: Object) => <td className="border px-4 py-2" {...props} />,
  hr: (props: Object) => <hr className="my-4" {...props} />,
  // img: (props: Object) => <img className="w-full" {...props} />,
  // wrapper: (props: Object) => <div className="prose" {...props} />,
};

export default MDXComponents;
