use std::{thread, time::Duration};

fn ticker<F>(mut func: F) where F: FnMut() + Send + 'static, {
    loop {
        func();
        thread::sleep(Duration::from_secs(1));
    }
}

fn main() {
    let mut counter = 0;

    ticker(move || {
        println!("Ticker executing the closure of the main function. Counter: {}", counter);
        counter += 1;
    });
}
