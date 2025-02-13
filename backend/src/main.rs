use std::{sync::{atomic::{AtomicBool, AtomicUsize, Ordering}, Arc, Mutex}, task, thread, time::Duration};
use tokio;

mod line_reader;

struct Ticker {
    count: Arc<AtomicUsize>,
    running: Arc<AtomicBool>
}

// async fn ticker<F>(mut func: F) where F: FnMut() + Send + 'static, {
//     loop {
//         func();
//         // thread::sleep(Duration::from_secs(1));
//         tokio::time::sleep(Duration::from_secs(1)).await; // changed
//     }
// }

impl Ticker {

    pub fn new() -> Self {
        Ticker {
            count: Arc::new(AtomicUsize::new(0)),
            running: Arc::new(AtomicBool::new(true))
        }
    }

    pub async fn start(&self) {

        let count_clone = Arc::clone(&self.count);
        let running_clone = Arc::clone(&self.running);

        tokio::spawn(async move {
            while running_clone.load(Ordering::Acquire) {
                let current_count = count_clone.fetch_add(1, Ordering::Relaxed);
                println!(
                    "Ticker executing the closure of the main function. Counter: {}",
                    current_count
                );
                tokio::time::sleep(Duration::from_secs(1)).await;
            }
        });
    }

    pub async fn stop(&self) {
        let _ = &self.running.store(false, Ordering::Release);
    }

}

#[tokio::main]
async fn main() {
    let ticker = Ticker::new();

    ticker.start().await;

    println!("MAIN THREAD IS WORKING INDEED !! IT WILL SLEEP FOR 5 SEC");

    tokio::time::sleep(Duration::from_secs(5)).await;

    ticker.stop().await;
}
