import { HotelCard } from '@/components/val8/Val8Context';

export const TOP_ATTRACTIONS: HotelCard[] = [
    {
        id: 'attr-1',
        name: 'Tanomah: Scenic Horse Riding',
        location: 'Aseer',
        price: 'From $45',
        priceSuffix: '',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800',
        tags: ['Nature', 'Adventure'],
        type: 'attraction'
    },
    {
        id: 'attr-2',
        name: 'Museum of the Future',
        location: 'Sheikh Zayed Road',
        price: 'From $38',
        priceSuffix: '/ person',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1644917646199-27083041c30e?auto=format&fit=crop&q=80&w=800',
        tags: ['Museum', 'Technology', 'Architecture'],
        type: 'attraction'
    },
    {
        id: 'attr-3',
        name: 'Dubai Frame',
        location: 'Zabeel Park',
        price: 'From $15',
        priceSuffix: '/ person',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1554867186-5c08c909da4d?auto=format&fit=crop&q=80&w=800',
        tags: ['Views', 'Architecture', 'History'],
        type: 'attraction'
    }
];

export const UPCOMING_EVENTS: HotelCard[] = [
    {
        id: 'evt-1',
        name: 'Dubai Shopping Festival',
        location: 'Citywide',
        price: 'Free',
        priceSuffix: '',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1549484961-464a9354b5f8?auto=format&fit=crop&q=80&w=800',
        tags: ['Shopping', 'Festival', 'Fireworks'],
        type: 'event',
        startDate: '10 JAN',
        endDate: '2026'
    },
    {
        id: 'evt-2',
        name: 'AlManshiyah Carnival',
        location: 'Alula',
        price: 'From $25',
        priceSuffix: '/ entry',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
        tags: ['Entertainment', 'Carnival'],
        type: 'event',
        startDate: '19 DEC',
        endDate: '2025'
    },
    {
        id: 'evt-3',
        name: 'Tanomah: Scenic Horse Riding',
        location: 'Aseer',
        price: '$50',
        priceSuffix: '',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1574768316274-1daaf8a927fa?auto=format&fit=crop&q=80&w=800',
        tags: ['Adventure', 'Nature'],
        type: 'attraction'
    }
];
// Note: I modified evt-3 to match "Tanomah" from the image but type attraction, mixing data for demo purposes.
// Actually I should update TOP_ATTRACTIONS to match the image "Tanomah".
// Let's just update UPCOMING_EVENTS properly first.
