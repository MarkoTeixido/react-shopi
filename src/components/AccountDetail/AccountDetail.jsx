function AccountDetail() {
    const navigations = [
        {
          icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>,
          title: "Personal Information",
          desc: "Lorem Ipsum is simply dummy text of the printing",
          href: "#"
        },
        {
          icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>,
          title: "Payment Information",
          desc: "Lorem Ipsum is simply dummy text of the printing",
          href: "#"
        },
        {
          icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>,
          title: "Account",
          desc: "Lorem Ipsum is simply dummy text of the printing",
          href: "#"
        }
    ];
    
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-gray-600">
                    <div className="space-y-3 text-center">
                        <h3 className="text-neutral-900 font-semibold">
                            Account
                        </h3>
                        <p>
                            Manage and custom your account.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="divide-y">
                            {
                                navigations.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4 pt-4 pb-6">
                                        <div className="flex-none w-14 h-14 bg-indigo-50 rounded-full text-neutral-600 flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-gray-800 font-medium">{item.title}</h4>
                                            <p>
                                                {item.desc}
                                            </p>
                                            <a href={item.href} className="text-sm text-neutral-600 duration-150 hover:text-neutral-500 font-medium inline-flex items-center">
                                                More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-1">
                                                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AccountDetail;