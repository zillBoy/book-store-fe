import { URL } from '../utility/utils'

export const books = [
    {
        id: 1,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book1.jpg',
        status: 'published'
    },
    {
        id: 2,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book2.jpg',
        status: 'published',
    },
    {
        id: 3,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book3.jpg',
        status: 'published',
    },
    {
        id: 4,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book4.jpg',
        status: 'published',
    },
    {
        id: 5,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book5.jpg',
        status: 'published',
    },
    {
        id: 6,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book6.jpg',
        status: 'published',
    },
    {
        id: 7,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book7.jpg',
        status: 'published',
    },
    {
        id: 8,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book8.jpg',
        status: 'published',
    },
    {
        id: 9,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book9.jpg',
        status: 'published',
    },
    {
        id: 10,
        name: 'The Martian',
        author: 'Andy Weir',
        publisher: 'Little, Brown Books for Young',
        isbn: '0316480207',
        year: '2018',
        language: 'English',
        genre: 'Sci-Fi',
        page: 390,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing sddsas elit. Curabitur scelerisque leo augue, quis consequat ante ullamcorper vel. Duis turpis lectus, tincidunt nec ipsum sit amet, sodales tristique urna.
            Aliquam venenatis nunc ut nulla interdum, ut tincidunt metus convallis. Aenean posuere ultricies feugiat. Nulla semper maximus lectus, et suscipit leo pellentesque a. Nulla ac faucibus enim. Suspendisse potenti.
            Donec non accumsan ex, quis vulputate nulla. Aenean id libero elementum, rhoncus nisi a, hendrerit odio. Phasellus arcu ante, consequat vitae aliquet at, faucibus nec mi.
        `,
        image: '/images/book/book10.jpg',
        status: 'published',
    },
]

async function httpGetAllBooks() {
    try {
        const response = await fetch(`${URL}/books`)
        const data = await response.json()

        return data
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

async function httpDeleteBookById(id) {
    try {
        return await fetch(`${URL}/books/${id}`, {
            method: 'DELETE'
        })
    } catch(err) {
        console.log(err)
        return {
            ok: false
        }
    }
}

export {
    httpGetAllBooks,
    httpDeleteBookById
};