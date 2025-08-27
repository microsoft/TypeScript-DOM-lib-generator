let p: Promise<number>;
p = new LockManager().request('sync', () => 0);
p = new LockManager().request('async', async () => 0);
